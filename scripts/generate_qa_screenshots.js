import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const OUT_DIR = path.resolve('qa/AWD-PREMIUM-V2');
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const PORT = 9228;
const USER_DATA = path.join(process.env.TEMP || 'C:\\temp', 'chrome_qa_v2_' + Date.now());

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  `--remote-debugging-port=${PORT}`,
  '--headless=new',
  '--disable-gpu',
  '--no-first-run',
  '--remote-allow-origins=*',
  '--no-default-browser-check',
  `--user-data-dir=${USER_DATA}`
]);

async function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

function sendCommand(ws, method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = Math.floor(Math.random() * 100000);
    const handler = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id === id) {
        ws.removeEventListener('message', handler);
        if (msg.error) reject(new Error(msg.error.message));
        else resolve(msg.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });
}

async function captureScreenshot(url, filename, width, height, isMobile = false) {
  console.log(`[QA] Capturing ${filename} (${width}x${height})...`);
  let ws = null;
  let tabId = null;
  try {
    const newTabRes = await fetch(`http://127.0.0.1:${PORT}/json/new?${encodeURIComponent(url)}`, { method: 'PUT' });
    const tab = await newTabRes.json();
    tabId = tab.id;
    ws = new WebSocket(tab.webSocketDebuggerUrl);

    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });

    await sendCommand(ws, 'Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: isMobile
    });

    await sendCommand(ws, 'Page.enable');
    await sendCommand(ws, 'Page.navigate', { url });

    // Wait for network requests and Framer Motion transitions
    await sleep(2500);

    // Dismiss cookies if button exists
    await sendCommand(ws, 'Runtime.evaluate', {
      expression: `(() => {
        const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && (b.textContent.includes('Acceptă') || b.textContent.includes('Accept')));
        if (btn) btn.click();
      })()`
    });

    await sleep(500);

    const { data } = await sendCommand(ws, 'Page.captureScreenshot', { format: 'png' });
    const buffer = Buffer.from(data, 'base64');
    fs.writeFileSync(path.join(OUT_DIR, filename), buffer);
    console.log(`[QA] Saved: ${filename} (${(buffer.length / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error(`[QA ERROR] Failed to capture ${filename}:`, err.message);
  } finally {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.close();
    }
    if (tabId) {
      await fetch(`http://127.0.0.1:${PORT}/json/close/${tabId}`).catch(() => {});
    }
  }
}

async function run() {
  await sleep(1500);

  const LOCAL_BASE = 'http://localhost:5180';
  const V1_BASE = 'https://awd-auto-redesign-preview.vercel.app';

  const viewports = [
    { name: 'desktop_1920', w: 1920, h: 1080, mobile: false },
    { name: 'desktop_1440', w: 1440, h: 900, mobile: false },
    { name: 'tablet_768', w: 768, h: 1024, mobile: true },
    { name: 'mobile_390', w: 390, h: 844, mobile: true },
    { name: 'mobile_375', w: 375, h: 812, mobile: true },
  ];

  // 1. Capture V2 Homepage across all 5 viewports
  for (const vp of viewports) {
    await captureScreenshot(LOCAL_BASE, `v2_homepage_${vp.name}.png`, vp.w, vp.h, vp.mobile);
  }

  // 2. Capture V2 Subpages
  await captureScreenshot(`${LOCAL_BASE}/masini-disponibile`, 'v2_stock_desktop_1440.png', 1440, 900, false);
  await captureScreenshot(`${LOCAL_BASE}/masini-disponibile`, 'v2_stock_mobile_390.png', 390, 844, true);

  await captureScreenshot(`${LOCAL_BASE}/masini-disponibile/cmvi6pg2708g3sx2abee72g1i`, 'v2_cardetails_desktop_1440.png', 1440, 900, false);
  await captureScreenshot(`${LOCAL_BASE}/masini-disponibile/cmvi6pg2708g3sx2abee72g1i`, 'v2_cardetails_mobile_390.png', 390, 844, true);

  await captureScreenshot(`${LOCAL_BASE}/finantare`, 'v2_finantare_desktop_1440.png', 1440, 900, false);
  await captureScreenshot(`${LOCAL_BASE}/contact`, 'v2_contact_desktop_1440.png', 1440, 900, false);

  // 3. Capture Comparative V1 Screenshots (side-by-side)
  await captureScreenshot(V1_BASE, 'v1_homepage_desktop_1440.png', 1440, 900, false);
  await captureScreenshot(V1_BASE, 'v1_homepage_mobile_390.png', 390, 844, true);
  await captureScreenshot(`${V1_BASE}/masini-disponibile`, 'v1_stock_desktop_1440.png', 1440, 900, false);

  console.log('[QA SUCCESS] All screenshots saved into:', OUT_DIR);
  chrome.kill();
  process.exit(0);
}

run();
