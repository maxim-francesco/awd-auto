import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const OUT_DIR = path.resolve('qa/AWD-V2-1-CREATIVE-QUALITY');
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const PORT = 9231;
const USER_DATA = path.join(process.env.TEMP || 'C:\\temp', 'chrome_qa_v21_before_' + Date.now());

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

async function captureScreenshot(url, filename, width, height, isMobile = false, fullPage = false) {
  console.log(`[QA BEFORE] Capturing ${filename} (${width}x${height}, full=${fullPage})...`);
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

    await sleep(2500);

    // Accept cookies if banner visible
    await sendCommand(ws, 'Runtime.evaluate', {
      expression: `(() => {
        const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && (b.textContent.includes('Acceptă') || b.textContent.includes('Accept')));
        if (btn) btn.click();
      })()`
    });

    await sleep(600);

    const shotOptions = { format: 'png' };
    if (fullPage) {
      shotOptions.captureBeyondViewport = true;
    }

    const { data } = await sendCommand(ws, 'Page.captureScreenshot', shotOptions);
    const buffer = Buffer.from(data, 'base64');
    fs.writeFileSync(path.join(OUT_DIR, filename), buffer);
    console.log(`[QA BEFORE] Saved: ${filename} (${(buffer.length / 1024).toFixed(1)} KB)`);
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
  const BASE = 'http://localhost:5180';

  // Desktop 1440 Viewport
  await captureScreenshot(BASE, 'before_homepage_desktop_1440.png', 1440, 900, false, false);
  await captureScreenshot(BASE, 'before_homepage_desktop_fullpage.png', 1440, 900, false, true);

  // Mobile 390 Viewport
  await captureScreenshot(BASE, 'before_homepage_mobile_390.png', 390, 844, true, false);
  await captureScreenshot(BASE, 'before_homepage_mobile_fullpage.png', 390, 844, true, true);

  // Subpages
  await captureScreenshot(`${BASE}/masini-disponibile`, 'before_stock_desktop_1440.png', 1440, 900, false, false);
  await captureScreenshot(`${BASE}/masini-disponibile/cmvi6pg2708g3sx2abee72g1i`, 'before_cardetails_desktop_1440.png', 1440, 900, false, false);
  await captureScreenshot(`${BASE}/finantare`, 'before_finantare_desktop_1440.png', 1440, 900, false, false);
  await captureScreenshot(`${BASE}/contact`, 'before_contact_desktop_1440.png', 1440, 900, false, false);

  console.log('[QA BEFORE] All BEFORE screenshots saved into:', OUT_DIR);
  chrome.kill();
  process.exit(0);
}

run();
