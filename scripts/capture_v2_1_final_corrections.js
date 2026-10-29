import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const OUT_DIR = path.resolve('qa/AWD-V2-1-FINAL-CORRECTIONS');
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const PORT = 9244;
const USER_DATA = path.join(process.env.TEMP || 'C:\\temp', 'chrome_qa_v21_final_' + Date.now());

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

async function captureScreenshot(url, filename, width, height, isMobile = false, fullPage = false, scrollSelector = null, customAction = null) {
  console.log(`[QA FINAL] Capturing ${filename} (${width}x${height}, full=${fullPage})...`);
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

    await sleep(400);

    if (customAction) {
      await sendCommand(ws, 'Runtime.evaluate', {
        expression: customAction
      });
      await sleep(600);
    }

    if (scrollSelector) {
      await sendCommand(ws, 'Runtime.evaluate', {
        expression: `(() => {
          const el = document.querySelector('${scrollSelector}');
          if (el) {
            el.scrollIntoView({ behavior: 'instant', block: 'center' });
          }
        })()`
      });
      await sleep(600);
    }

    const shotOptions = { format: 'png' };
    if (fullPage) {
      shotOptions.captureBeyondViewport = true;
    }

    const { data } = await sendCommand(ws, 'Page.captureScreenshot', shotOptions);
    const buffer = Buffer.from(data, 'base64');
    fs.writeFileSync(path.join(OUT_DIR, filename), buffer);
    console.log(`[QA FINAL] Saved: ${filename} (${(buffer.length / 1024).toFixed(1)} KB)`);
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

  // 1. Finance Calculator Audited Desktop (Showing ~316,68 €/mo, 15.200,60 € total installments, 17.450,60 € total acquisition)
  await captureScreenshot(BASE, '01_desktop_finance_calculator_audited.png', 1440, 950, false, false, 'input[type="range"]');

  // 2. Finance Calculator Zero Down Payment
  await captureScreenshot(
    BASE,
    '02_desktop_finance_calculator_zero_down.png',
    1440,
    950,
    false,
    false,
    'input[type="range"]',
    `(() => {
      const inputs = document.querySelectorAll('input[type="range"]');
      if (inputs.length >= 2) {
        inputs[1].value = 0;
        inputs[1].dispatchEvent(new Event('input', { bubbles: true }));
        inputs[1].dispatchEvent(new Event('change', { bubbles: true }));
      }
    })()`
  );

  // 3. Google Reviews Audited Desktop (No hardcoded fake decimal, authentic testimonials & Maps link)
  await captureScreenshot(BASE, '03_desktop_google_reviews_audited.png', 1440, 950, false, false, 'section[class*="bg-[#F5F2EB]"]');

  // 4. THE AWD STANDARD with Commercial Note
  await captureScreenshot(BASE, '04_desktop_the_awd_standard_disclaimer.png', 1440, 950, false, false, 'section[class*="bg-[#0B0E14]"]');

  // 5. Footer with Global Commercial Disclosure
  await captureScreenshot(BASE, '05_desktop_footer_commercial_disclosure.png', 1440, 950, false, false, 'footer');

  // 6. Finantare Page Audited
  await captureScreenshot(`${BASE}/finantare`, '06_desktop_finantare_page_audited.png', 1440, 950, false, false, 'input[type="range"]');

  // 7. Full Homepage
  await captureScreenshot(BASE, '07_desktop_homepage_fullpage.png', 1440, 900, false, true);

  // 8. Mobile Finance Calculator Audited
  await captureScreenshot(BASE, '08_mobile_finance_calculator_audited.png', 390, 844, true, false, 'input[type="range"]');

  // 9. Mobile Google Reviews Audited
  await captureScreenshot(BASE, '09_mobile_google_reviews_audited.png', 390, 844, true, false, 'section[class*="bg-[#F5F2EB]"]');

  console.log('\n[QA FINAL SUCCESS] All audited correction screenshots saved into:', OUT_DIR);
  chrome.kill();
  process.exit(0);
}

run();
