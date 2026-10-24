/**
 * samayam ethrayai — TinkerHub Editorial Aesthetic
 * Seamless 3-Stage Scroll Transition: Text -> Clock (Only It) -> Remote (Only It)
 */

(function () {
  'use strict';

  // ==========================================================================
  // SVG Country Flags (Self-contained, 100% reliable, zero network latency)
  // ==========================================================================
  const SVG_FLAGS = {
    IN: `<svg viewBox="0 0 640 480"><rect width="640" height="160" fill="#ff9933"/><rect y="160" width="640" height="160" fill="#ffffff"/><rect y="320" width="640" height="160" fill="#128807"/><circle cx="320" cy="240" r="45" fill="none" stroke="#000088" stroke-width="6"/><circle cx="320" cy="240" r="12" fill="#000088"/></svg>`,
    US: `<svg viewBox="0 0 640 480"><rect width="640" height="480" fill="#b22234"/><path d="M0,37h640v37H0zM0,111h640v37H0zM0,185h640v37H0zM0,259h640v37H0zM0,333h640v37H0zM0,407h640v37H0z" fill="#fff"/><rect width="256" height="259" fill="#3c3b6e"/><circle cx="128" cy="130" r="60" fill="#ffffff" opacity="0.4"/></svg>`,
    GB: `<svg viewBox="0 0 640 480"><rect width="640" height="480" fill="#012169"/><path d="M0,0 L640,480 M640,0 L0,480" stroke="#fff" stroke-width="60"/><path d="M0,0 L640,480 M640,0 L0,480" stroke="#c8102e" stroke-width="25"/><path d="M320,0 V480 M0,240 H640" stroke="#fff" stroke-width="100"/><path d="M320,0 V480 M0,240 H640" stroke="#c8102e" stroke-width="60"/></svg>`,
    JP: `<svg viewBox="0 0 640 480"><rect width="640" height="480" fill="#ffffff"/><circle cx="320" cy="240" r="144" fill="#bc002d"/></svg>`,
    AE: `<svg viewBox="0 0 640 480"><rect width="640" height="160" fill="#00732f"/><rect y="160" width="640" height="160" fill="#ffffff"/><rect y="320" width="640" height="160" fill="#000000"/><rect width="180" height="480" fill="#ff0000"/></svg>`,
    DE: `<svg viewBox="0 0 640 480"><rect width="640" height="160" fill="#000000"/><rect y="160" width="640" height="160" fill="#dd0000"/><rect y="320" width="640" height="160" fill="#ffce00"/></svg>`,
    FR: `<svg viewBox="0 0 640 480"><rect width="213.3" height="480" fill="#002395"/><rect x="213.3" width="213.3" height="480" fill="#ffffff"/><rect x="426.6" width="213.4" height="480" fill="#ed2939"/></svg>`,
    AU: `<svg viewBox="0 0 640 480"><rect width="640" height="480" fill="#00008b"/><path d="M0,0 L320,240 M320,0 L0,240" stroke="#fff" stroke-width="30"/><path d="M160,0 V240 M0,120 H320" stroke="#cc0000" stroke-width="25"/><circle cx="480" cy="340" r="30" fill="#fff"/><circle cx="520" cy="180" r="20" fill="#fff"/><circle cx="440" cy="200" r="18" fill="#fff"/></svg>`,
    CA: `<svg viewBox="0 0 640 480"><rect width="160" height="480" fill="#ff0000"/><rect x="160" width="320" height="480" fill="#ffffff"/><rect x="480" width="160" height="480" fill="#ff0000"/><path d="M320,130 L340,210 L400,200 L350,250 L380,310 L320,280 L260,310 L290,250 L240,200 L300,210 Z" fill="#ff0000"/></svg>`,
    SG: `<svg viewBox="0 0 640 480"><rect width="640" height="240" fill="#ed2939"/><rect y="240" width="640" height="240" fill="#ffffff"/><circle cx="160" cy="120" r="70" fill="#ffffff"/><circle cx="185" cy="120" r="62" fill="#ed2939"/></svg>`,
    BR: `<svg viewBox="0 0 640 480"><rect width="640" height="480" fill="#009c3b"/><polygon points="320,40 600,240 320,440 40,240" fill="#ffdf00"/><circle cx="320" cy="240" r="95" fill="#002776"/></svg>`,
    KR: `<svg viewBox="0 0 640 480"><rect width="640" height="480" fill="#ffffff"/><circle cx="320" cy="240" r="100" fill="#c60c30"/><path d="M220,240 A100,100 0 0,0 420,240 A50,50 0 0,0 320,240 A50,50 0 0,1 220,240" fill="#003478"/></svg>`,
    SA: `<svg viewBox="0 0 640 480"><rect width="640" height="480" fill="#006c35"/><rect x="180" y="300" width="280" height="18" fill="#ffffff" rx="9"/><path d="M240,200 L400,200" stroke="#fff" stroke-width="12"/></svg>`,
    QA: `<svg viewBox="0 0 640 480"><rect width="640" height="480" fill="#8d1b3d"/><polygon points="0,0 180,0 230,53 180,106 230,160 180,213 230,266 180,320 230,373 180,426 230,480 0,480" fill="#ffffff"/></svg>`,
    KW: `<svg viewBox="0 0 640 480"><rect width="640" height="160" fill="#007a3d"/><rect y="160" width="640" height="160" fill="#ffffff"/><rect y="320" width="640" height="160" fill="#ce1126"/><polygon points="0,0 180,160 180,320 0,480" fill="#000000"/></svg>`,
    IT: `<svg viewBox="0 0 640 480"><rect width="213.3" height="480" fill="#009246"/><rect x="213.3" width="213.3" height="480" fill="#ffffff"/><rect x="426.6" width="213.4" height="480" fill="#ce2b37"/></svg>`,
    ES: `<svg viewBox="0 0 640 480"><rect width="640" height="120" fill="#aa151b"/><rect y="120" width="640" height="240" fill="#f1bf00"/><rect y="360" width="640" height="120" fill="#aa151b"/><circle cx="180" cy="240" r="40" fill="#aa151b" opacity="0.6"/></svg>`,
    NL: `<svg viewBox="0 0 640 480"><rect width="640" height="160" fill="#ae1c28"/><rect y="160" width="640" height="160" fill="#ffffff"/><rect y="320" width="640" height="160" fill="#21468b"/></svg>`,
    CH: `<svg viewBox="0 0 640 480"><rect width="640" height="480" fill="#d52b1e"/><rect x="270" y="100" width="100" height="280" fill="#ffffff"/><rect x="180" y="190" width="280" height="100" fill="#ffffff"/></svg>`,
    SE: `<svg viewBox="0 0 640 480"><rect width="640" height="480" fill="#006aa7"/><rect x="180" width="80" height="480" fill="#fecc00"/><rect y="200" width="640" height="80" fill="#fecc00"/></svg>`,
    NO: `<svg viewBox="0 0 640 480"><rect width="640" height="480" fill="#ba0c2f"/><path d="M0,240 H640 M200,0 V480" stroke="#fff" stroke-width="100"/><path d="M0,240 H640 M200,0 V480" stroke="#00205b" stroke-width="50"/></svg>`,
    DK: `<svg viewBox="0 0 640 480"><rect width="640" height="480" fill="#c8102e"/><path d="M0,240 H640 M200,0 V480" stroke="#fff" stroke-width="60"/></svg>`,
    ZA: `<svg viewBox="0 0 640 480"><rect width="640" height="240" fill="#e03c31"/><rect y="240" width="640" height="240" fill="#001489"/><polygon points="0,0 260,240 0,480" fill="#000000"/><path d="M0,0 L260,240 L0,480" stroke="#ffb81c" stroke-width="30" fill="none"/><path d="M0,240 H640" stroke="#007749" stroke-width="80"/></svg>`,
    EG: `<svg viewBox="0 0 640 480"><rect width="640" height="160" fill="#ce1126"/><rect y="160" width="640" height="160" fill="#ffffff"/><rect y="320" width="640" height="160" fill="#000000"/><circle cx="320" cy="240" r="28" fill="#c09300"/></svg>`,
    RU: `<svg viewBox="0 0 640 480"><rect width="640" height="160" fill="#ffffff"/><rect y="160" width="640" height="160" fill="#0039a6"/><rect y="320" width="640" height="160" fill="#d52b1e"/></svg>`,
    CN: `<svg viewBox="0 0 640 480"><rect width="640" height="480" fill="#ee1c25"/><polygon points="120,70 135,115 180,115 145,140 160,185 120,160 80,185 95,140 60,115 105,115" fill="#ffff00"/></svg>`,
    MX: `<svg viewBox="0 0 640 480"><rect width="213.3" height="480" fill="#006847"/><rect x="213.3" width="213.3" height="480" fill="#ffffff"/><rect x="426.6" width="213.4" height="480" fill="#ce1126"/><circle cx="320" cy="240" r="32" fill="#8B5A2B"/></svg>`,
    TH: `<svg viewBox="0 0 640 480"><rect width="640" height="80" fill="#a51931"/><rect y="80" width="640" height="80" fill="#ffffff"/><rect y="160" width="640" height="160" fill="#2d2a4a"/><rect y="320" width="640" height="80" fill="#ffffff"/><rect y="400" width="640" height="80" fill="#a51931"/></svg>`,
    ID: `<svg viewBox="0 0 640 480"><rect width="640" height="240" fill="#ce1126"/><rect y="240" width="640" height="240" fill="#ffffff"/></svg>`,
    NZ: `<svg viewBox="0 0 640 480"><rect width="640" height="480" fill="#00247d"/><path d="M0,0 L320,240 M320,0 L0,240" stroke="#fff" stroke-width="30"/><path d="M160,0 V240 M0,120 H320" stroke="#cc0000" stroke-width="20"/><circle cx="480" cy="180" r="14" fill="#cc0000" stroke="#fff" stroke-width="4"/><circle cx="540" cy="240" r="14" fill="#cc0000" stroke="#fff" stroke-width="4"/></svg>`,
    IE: `<svg viewBox="0 0 640 480"><rect width="213.3" height="480" fill="#169b62"/><rect x="213.3" width="213.3" height="480" fill="#ffffff"/><rect x="426.6" width="213.4" height="480" fill="#ff883e"/></svg>`,
    PT: `<svg viewBox="0 0 640 480"><rect width="260" height="480" fill="#006600"/><rect x="260" width="380" height="480" fill="#ff0000"/><circle cx="260" cy="240" r="50" fill="#ffff00"/></svg>`,
    GR: `<svg viewBox="0 0 640 480"><rect width="640" height="480" fill="#0d5eaf"/><path d="M0,53h640 M0,160h640 M0,266h640 M0,373h640" stroke="#fff" stroke-width="53"/><rect width="240" height="240" fill="#0d5eaf"/><path d="M120,0 V240 M0,120 H240" stroke="#fff" stroke-width="48"/></svg>`,
    AT: `<svg viewBox="0 0 640 480"><rect width="640" height="160" fill="#ed2939"/><rect y="160" width="640" height="160" fill="#ffffff"/><rect y="320" width="640" height="160" fill="#ed2939"/></svg>`,
    BE: `<svg viewBox="0 0 640 480"><rect width="213.3" height="480" fill="#000000"/><rect x="213.3" width="213.3" height="480" fill="#ffd90c"/><rect x="426.6" width="213.4" height="480" fill="#ed2939"/></svg>`,
    TR: `<svg viewBox="0 0 640 480"><rect width="640" height="480" fill="#e30a17"/><circle cx="270" cy="240" r="110" fill="#ffffff"/><circle cx="295" cy="240" r="88" fill="#e30a17"/><polygon points="380,240 410,250 400,220 425,200 395,200 380,175 365,200 335,200 360,220 350,250" fill="#ffffff"/></svg>`
  };

  // ==========================================================================
  // Comprehensive Country Channels List (36 Global Timezones)
  // ==========================================================================
  const COUNTRIES = [
    { code: 'IN', name: 'India', tz: 'Asia/Kolkata', city: 'New Delhi / Kochi · IST (UTC+05:30)' },
    { code: 'US', name: 'United States', tz: 'America/New_York', city: 'New York · EDT (UTC-04:00)' },
    { code: 'GB', name: 'United Kingdom', tz: 'Europe/London', city: 'London · BST (UTC+01:00)' },
    { code: 'JP', name: 'Japan', tz: 'Asia/Tokyo', city: 'Tokyo · JST (UTC+09:00)' },
    { code: 'AE', name: 'United Arab Emirates', tz: 'Asia/Dubai', city: 'Dubai · GST (UTC+04:00)' },
    { code: 'DE', name: 'Germany', tz: 'Europe/Berlin', city: 'Berlin · CEST (UTC+02:00)' },
    { code: 'FR', name: 'France', tz: 'Europe/Paris', city: 'Paris · CEST (UTC+02:00)' },
    { code: 'AU', name: 'Australia', tz: 'Australia/Sydney', city: 'Sydney · AEST (UTC+10:00)' },
    { code: 'CA', name: 'Canada', tz: 'America/Toronto', city: 'Toronto · EDT (UTC-04:00)' },
    { code: 'SG', name: 'Singapore', tz: 'Asia/Singapore', city: 'Singapore · SGT (UTC+08:00)' },
    { code: 'BR', name: 'Brazil', tz: 'America/Sao_Paulo', city: 'São Paulo · BRT (UTC-03:00)' },
    { code: 'KR', name: 'South Korea', tz: 'Asia/Seoul', city: 'Seoul · KST (UTC+09:00)' },
    { code: 'SA', name: 'Saudi Arabia', tz: 'Asia/Riyadh', city: 'Riyadh · AST (UTC+03:00)' },
    { code: 'QA', name: 'Qatar', tz: 'Asia/Qatar', city: 'Doha · AST (UTC+03:00)' },
    { code: 'KW', name: 'Kuwait', tz: 'Asia/Kuwait', city: 'Kuwait City · AST (UTC+03:00)' },
    { code: 'IT', name: 'Italy', tz: 'Europe/Rome', city: 'Rome · CEST (UTC+02:00)' },
    { code: 'ES', name: 'Spain', tz: 'Europe/Madrid', city: 'Madrid · CEST (UTC+02:00)' },
    { code: 'NL', name: 'Netherlands', tz: 'Europe/Amsterdam', city: 'Amsterdam · CEST (UTC+02:00)' },
    { code: 'CH', name: 'Switzerland', tz: 'Europe/Zurich', city: 'Zurich · CEST (UTC+02:00)' },
    { code: 'SE', name: 'Sweden', tz: 'Europe/Stockholm', city: 'Stockholm · CEST (UTC+02:00)' },
    { code: 'NO', name: 'Norway', tz: 'Europe/Oslo', city: 'Oslo · CEST (UTC+02:00)' },
    { code: 'DK', name: 'Denmark', tz: 'Europe/Copenhagen', city: 'Copenhagen · CEST (UTC+02:00)' },
    { code: 'ZA', name: 'South Africa', tz: 'Africa/Johannesburg', city: 'Johannesburg · SAST (UTC+02:00)' },
    { code: 'EG', name: 'Egypt', tz: 'Africa/Cairo', city: 'Cairo · EEST (UTC+03:00)' },
    { code: 'RU', name: 'Russia', tz: 'Europe/Moscow', city: 'Moscow · MSK (UTC+03:00)' },
    { code: 'CN', name: 'China', tz: 'Asia/Shanghai', city: 'Beijing · CST (UTC+08:00)' },
    { code: 'MX', name: 'Mexico', tz: 'America/Mexico_City', city: 'Mexico City · CST (UTC-06:00)' },
    { code: 'TH', name: 'Thailand', tz: 'Asia/Bangkok', city: 'Bangkok · ICT (UTC+07:00)' },
    { code: 'ID', name: 'Indonesia', tz: 'Asia/Jakarta', city: 'Jakarta · WIB (UTC+07:00)' },
    { code: 'NZ', name: 'New Zealand', tz: 'Pacific/Auckland', city: 'Auckland · NZST (UTC+12:00)' },
    { code: 'IE', name: 'Ireland', tz: 'Europe/Dublin', city: 'Dublin · IST (UTC+01:00)' },
    { code: 'PT', name: 'Portugal', tz: 'Europe/Lisbon', city: 'Lisbon · WEST (UTC+01:00)' },
    { code: 'GR', name: 'Greece', tz: 'Europe/Athens', city: 'Athens · EEST (UTC+03:00)' },
    { code: 'AT', name: 'Austria', tz: 'Europe/Vienna', city: 'Vienna · CEST (UTC+02:00)' },
    { code: 'BE', name: 'Belgium', tz: 'Europe/Brussels', city: 'Brussels · CEST (UTC+02:00)' },
    { code: 'TR', name: 'Turkey', tz: 'Europe/Istanbul', city: 'Istanbul · TRT (UTC+03:00)' }
  ];

  // App State
  const state = {
    currentIndex: 0,
    soundEnabled: true,
    isListening: false,
    powerOn: true
  };

  // DOM Elements
  const heroTextContainer = document.getElementById('heroTextContainer');
  const clockOverlayLayer = document.getElementById('clockOverlayLayer');
  const remoteOverlayLayer = document.getElementById('remoteOverlayLayer');
  const scrollStoryTrack = document.getElementById('scrollStoryTrack');
  const scrollCta = document.getElementById('scrollCta');
  const brandLogo = document.getElementById('brandLogo');

  // Clock Hands & Ticks
  const clockTicksContainer = document.getElementById('clockTicksContainer');
  const hourHand = document.getElementById('hourHand');
  const minHand = document.getElementById('minHand');
  const secHand = document.getElementById('secHand');
  const wallClockEl = document.getElementById('wallClockEl');
  const navLiveTime = document.getElementById('navLiveTime');

  // Remote Elements
  const oledChannel = document.getElementById('oledChannel');
  const oledCountry = document.getElementById('oledCountry');
  const oledTime = document.getElementById('oledTime');
  const remoteOledDisplay = document.getElementById('remoteOledDisplay');

  const remoteIrLed = document.getElementById('remoteIrLed');
  const remotePowerBtn = document.getElementById('remotePowerBtn');
  const remoteVoiceBtn = document.getElementById('remoteVoiceBtn');
  const remoteMuteBtn = document.getElementById('remoteMuteBtn');
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const soundIcon = document.getElementById('soundIcon');
  const dpadUp = document.getElementById('dpadUp');
  const dpadDown = document.getElementById('dpadDown');
  const dpadLeft = document.getElementById('dpadLeft');
  const dpadRight = document.getElementById('dpadRight');
  const dpadOk = document.getElementById('dpadOk');
  const prevChBtn = document.getElementById('prevChBtn');
  const nextChBtn = document.getElementById('nextChBtn');
  const homeBtn = document.getElementById('homeBtn');
  const flagButtonsGrid = document.getElementById('flagButtonsGrid');

  // ==========================================================================
  // Clock Dial Precision Tick Generation
  // ==========================================================================
  function generateClockTicks(container) {
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < 60; i++) {
      const tick = document.createElement('span');
      tick.className = (i % 5 === 0) ? 'tick tick-hour' : 'tick tick-min';
      tick.style.transform = `rotate(${i * 6}deg)`;
      container.appendChild(tick);
    }
  }

  generateClockTicks(clockTicksContainer);

  // ==========================================================================
  // Web Audio API Tactile Mechanical Click Sound
  // ==========================================================================
  let audioCtx = null;

  function playRemoteClickSound() {
    if (!state.soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!audioCtx) audioCtx = new AudioContext();
      if (audioCtx.state === 'suspended') audioCtx.resume();

      const t = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, t);
      osc.frequency.exponentialRampToValueAtTime(45, t + 0.035);

      gain.gain.setValueAtTime(0.3, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.035);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(t);
      osc.stop(t + 0.04);
    } catch (e) {
      // Audio fallback silent
    }
  }

  // ==========================================================================
  // Remote IR Flash Simulation
  // ==========================================================================
  function triggerIrFlash() {
    if (!remoteIrLed) return;
    remoteIrLed.classList.add('transmitting');
    setTimeout(() => {
      remoteIrLed.classList.remove('transmitting');
    }, 110);
  }

  // ==========================================================================
  // Time Calculation Engine
  // ==========================================================================
  function getTimeInZone(timeZone) {
    const now = new Date();
    try {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
      });
      const parts = formatter.formatToParts(now);
      const h = parseInt(parts.find(p => p.type === 'hour').value, 10);
      const m = parseInt(parts.find(p => p.type === 'minute').value, 10);
      const s = parseInt(parts.find(p => p.type === 'second').value, 10);
      return { hours: h, minutes: m, seconds: s };
    } catch (e) {
      return {
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds()
      };
    }
  }

  // ==========================================================================
  // Update Hands & Remote Display
  // ==========================================================================
  function updateAllClocks() {
    const activeCountry = COUNTRIES[state.currentIndex];
    const t = getTimeInZone(activeCountry.tz);

    const s = t.seconds;
    const m = t.minutes;
    const h = t.hours;

    // Quartz Step Second Rotation
    const secDeg = s * 6;
    const minDeg = (m + s / 60) * 6;
    const hourDeg = ((h % 12) + m / 60 + s / 3600) * 30;

    // Rotate Clock Hands
    if (secHand) secHand.style.transform = `rotate(${secDeg}deg)`;
    if (minHand) minHand.style.transform = `rotate(${minDeg}deg)`;
    if (hourHand) hourHand.style.transform = `rotate(${hourDeg}deg)`;

    // Digital time strings
    const h12 = (h % 12) === 0 ? 12 : (h % 12);
    const period = h >= 12 ? 'PM' : 'AM';
    const hh = String(h12).padStart(2, '0');
    const mm = String(m).padStart(2, '0');
    const ss = String(s).padStart(2, '0');

    // Update Remote OLED Display
    if (oledTime) oledTime.textContent = `${hh}:${mm} ${period}`;

    // Top nav live time
    if (navLiveTime) navLiveTime.textContent = `${hh}:${mm}:${ss} ${period}`;

    // Replicate Country on the Physical Quartz Dial
    const clockDialOrigin = document.getElementById('clockDialOrigin');
    if (clockDialOrigin) {
      clockDialOrigin.textContent = activeCountry.code === 'IN' ? 'KERALA' : activeCountry.name.toUpperCase();
    }
  }

  // Run tick loop
  setInterval(updateAllClocks, 1000);
  updateAllClocks();

  // ==========================================================================
  // Set Active Country Channel
  // ==========================================================================
  function setCountry(index) {
    if (index < 0) index = COUNTRIES.length - 1;
    if (index >= COUNTRIES.length) index = 0;

    state.currentIndex = index;
    const country = COUNTRIES[index];

    triggerIrFlash();
    playRemoteClickSound();

    // Update Remote OLED Screen
    if (oledChannel) oledChannel.textContent = `CH ${String(index + 1).padStart(2, '0')}`;
    if (oledCountry) oledCountry.textContent = country.name.toUpperCase();

    // Update button active states
    document.querySelectorAll('.flag-rubber-btn').forEach(btn => {
      const idx = parseInt(btn.dataset.index, 10);
      if (idx === index) {
        btn.classList.add('active');
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        btn.classList.remove('active');
      }
    });

    updateAllClocks();
  }

  // ==========================================================================
  // Populate Tactile Flag Keypad inside Remote
  // ==========================================================================
  function renderFlagButtons() {
    if (!flagButtonsGrid) return;
    flagButtonsGrid.innerHTML = '';

    COUNTRIES.forEach((c, idx) => {
      const btn = document.createElement('button');
      btn.className = `flag-rubber-btn ${idx === state.currentIndex ? 'active' : ''}`;
      btn.dataset.index = idx;
      btn.type = 'button';
      btn.title = `${c.name} (${c.code})`;
      btn.setAttribute('aria-label', `${c.name} channel`);

      const flagSvg = SVG_FLAGS[c.code] || '';

      btn.innerHTML = `
        <div class="btn-flag-thumb">${flagSvg}</div>
        <span class="btn-country-code">${c.code}</span>
      `;

      btn.addEventListener('click', () => setCountry(idx));
      flagButtonsGrid.appendChild(btn);
    });

    // Set initial OLED state
    if (oledChannel) oledChannel.textContent = `CH 01`;
    if (oledCountry) oledCountry.textContent = COUNTRIES[0].name.toUpperCase();
  }

  renderFlagButtons();

  // Ensure fresh page load starts at the top (Clock alone in center)
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);

  // ==========================================================================
  // Zero-Overlap Scroll Story Transition:
  // 1. At Beginning (progress = 0): "samayam ethrayai" editorial typography alone.
  // 2. Stage 1 (0 -> 0.35): Clock overlays into center as "samayam ethrayai" fades out.
  // 3. Stage 2 (0.35 -> 0.68): Clock ascends smoothly to upside persistent position.
  // 4. Stage 3 (0.68 -> 1.00): Remote glides in below it with massive clearance (>140px).
  // Clock remains 100% persistent upside and replicates all time changes.
  // ==========================================================================
  function onScroll() {
    if (!scrollStoryTrack || !heroTextContainer || !clockOverlayLayer || !remoteOverlayLayer) return;

    const scrollTop = window.scrollY || window.pageYOffset;
    const maxScroll = Math.max(scrollStoryTrack.offsetHeight - window.innerHeight, 1);
    const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
    const vh = window.innerHeight;

    // ------------------------------------------------------------------------
    // STAGE 1: Beginning -> "samayam ethrayai" overlays into Kerala Clock (0.00 to 0.35)
    // ------------------------------------------------------------------------
    if (progress <= 0.35) {
      // 1. "samayam ethrayai" Text Layer
      // Visible at progress 0, dissolves upward as scroll begins
      if (progress <= 0.18) {
        const textP = progress / 0.18;
        const textOpacity = Math.max(1 - textP, 0);
        const textY = -textP * 40;
        heroTextContainer.style.visibility = 'visible';
        heroTextContainer.style.opacity = textOpacity.toFixed(3);
        heroTextContainer.style.transform = `translate(-50%, calc(-50% + ${textY.toFixed(1)}px)) scale(${1 - textP * 0.05})`;
        heroTextContainer.style.pointerEvents = textOpacity < 0.2 ? 'none' : 'auto';
      } else {
        heroTextContainer.style.opacity = '0';
        heroTextContainer.style.visibility = 'hidden';
        heroTextContainer.style.pointerEvents = 'none';
      }

      // 2. Wall Clock Layer
      // At progress = 0: completely hidden so only "samayam ethrayai" shows at beginning
      if (progress < 0.05) {
        clockOverlayLayer.style.opacity = '0';
        clockOverlayLayer.style.visibility = 'hidden';
        clockOverlayLayer.style.pointerEvents = 'none';
        clockOverlayLayer.style.transform = 'translate(-50%, -50%) scale(0.72)';
      } else {
        const clockP = Math.min((progress - 0.05) / 0.22, 1);
        const easeClock = clockP * clockP * (3 - 2 * clockP);
        const clockScale = 0.72 + (0.28 * easeClock); // scales 0.72 -> 1.0 (hero center)
        clockOverlayLayer.style.visibility = 'visible';
        clockOverlayLayer.style.opacity = easeClock.toFixed(3);
        clockOverlayLayer.style.transform = `translate(-50%, -50%) scale(${clockScale.toFixed(3)})`;
        clockOverlayLayer.style.pointerEvents = easeClock > 0.5 ? 'auto' : 'none';
      }

      // 3. Remote Layer: hidden during Stage 1
      remoteOverlayLayer.style.opacity = '0';
      remoteOverlayLayer.style.visibility = 'hidden';
      remoteOverlayLayer.style.pointerEvents = 'none';
      remoteOverlayLayer.style.transform = 'translate(-50%, calc(-50% + 220px)) scale(0.65)';
      remoteOverlayLayer.classList.remove('active-interact');
    }
    // ------------------------------------------------------------------------
    // STAGE 2: Clock ascends to Upside Persistent position (0.35 to 0.68)
    // ------------------------------------------------------------------------
    else if (progress <= 0.68) {
      // Text gone
      heroTextContainer.style.opacity = '0';
      heroTextContainer.style.visibility = 'hidden';
      heroTextContainer.style.pointerEvents = 'none';

      // Clock is fully persistent (opacity: 1), ascends upside
      clockOverlayLayer.style.visibility = 'visible';
      clockOverlayLayer.style.opacity = '1';
      clockOverlayLayer.style.pointerEvents = 'auto';

      const pAscend = (progress - 0.35) / 0.33;
      const easeAscend = pAscend * pAscend * (3 - 2 * pAscend);

      const maxClockShiftY = Math.min(vh * 0.35, 275);
      const clockShiftY = -easeAscend * maxClockShiftY;
      const clockScale = 1.0 - (easeAscend * 0.56); // 1.0 -> 0.44

      clockOverlayLayer.style.transform = `translate(-50%, calc(-50% + ${clockShiftY.toFixed(1)}px)) scale(${clockScale.toFixed(3)})`;

      // Remote still hidden while clock is ascending to prevent collision
      remoteOverlayLayer.style.opacity = '0';
      remoteOverlayLayer.style.visibility = 'hidden';
      remoteOverlayLayer.style.pointerEvents = 'none';
      remoteOverlayLayer.style.transform = 'translate(-50%, calc(-50% + 220px)) scale(0.65)';
      remoteOverlayLayer.classList.remove('active-interact');
    }
    // ------------------------------------------------------------------------
    // STAGE 3: Clock persistent upside + Remote glides in below it (0.68 to 1.00)
    // ------------------------------------------------------------------------
    else {
      // Text gone
      heroTextContainer.style.opacity = '0';
      heroTextContainer.style.visibility = 'hidden';
      heroTextContainer.style.pointerEvents = 'none';

      // Clock stays persistent upside at top
      const maxClockShiftY = Math.min(vh * 0.35, 275);
      clockOverlayLayer.style.visibility = 'visible';
      clockOverlayLayer.style.opacity = '1';
      clockOverlayLayer.style.pointerEvents = 'auto';
      clockOverlayLayer.style.transform = `translate(-50%, calc(-50% - ${maxClockShiftY.toFixed(1)}px)) scale(0.44)`;

      // Remote glides into view below the clock with generous clearance (>140px)
      const pRemote = (progress - 0.68) / 0.32;
      const easeRemote = pRemote * pRemote * (3 - 2 * pRemote);

      const remoteOpacity = Math.min(pRemote / 0.45, 1);
      const maxRemoteShiftY = Math.min(vh * 0.18, 145);
      const remoteY = maxRemoteShiftY + ((1 - easeRemote) * 55);
      const remoteScale = 0.65 + (0.05 * easeRemote); // 0.65 -> 0.70

      remoteOverlayLayer.style.visibility = 'visible';
      remoteOverlayLayer.style.pointerEvents = 'auto';
      remoteOverlayLayer.style.opacity = remoteOpacity.toFixed(3);
      remoteOverlayLayer.style.transform = `translate(-50%, calc(-50% + ${remoteY.toFixed(1)}px)) scale(${remoteScale.toFixed(3)})`;

      if (remoteOpacity >= 0.7) {
        remoteOverlayLayer.classList.add('active-interact');
      } else {
        remoteOverlayLayer.classList.remove('active-interact');
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll(); // initial state

  // Clock interactive click to announce time
  if (wallClockEl) {
    wallClockEl.style.cursor = 'pointer';
    wallClockEl.title = 'Click to hear current time';
    wallClockEl.addEventListener('click', () => {
      triggerIrFlash();
      playRemoteClickSound();
      speakCurrentTime();
    });
  }

  // Smooth scroll CTA
  if (scrollCta) {
    scrollCta.addEventListener('click', () => {
      const maxScroll = Math.max(scrollStoryTrack.offsetHeight - window.innerHeight, 1);
      window.scrollTo({ top: maxScroll * 0.90, behavior: 'smooth' });
    });
  }

  if (brandLogo) {
    brandLogo.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================================================
  // Remote Hardware Buttons (D-Pad, Rockers, Power, Sound)
  // ==========================================================================
  if (dpadUp || dpadLeft || prevChBtn) {
    const prev = () => setCountry(state.currentIndex - 1);
    if (dpadUp) dpadUp.addEventListener('click', prev);
    if (dpadLeft) dpadLeft.addEventListener('click', prev);
    if (prevChBtn) prevChBtn.addEventListener('click', prev);
  }

  if (dpadDown || dpadRight || nextChBtn) {
    const next = () => setCountry(state.currentIndex + 1);
    if (dpadDown) dpadDown.addEventListener('click', next);
    if (dpadRight) dpadRight.addEventListener('click', next);
    if (nextChBtn) nextChBtn.addEventListener('click', next);
  }

  if (homeBtn) {
    homeBtn.addEventListener('click', () => setCountry(0)); // Jump to India
  }

  if (dpadOk) {
    dpadOk.addEventListener('click', () => {
      triggerIrFlash();
      playRemoteClickSound();
      speakCurrentTime();
    });
  }

  if (remotePowerBtn) {
    remotePowerBtn.addEventListener('click', () => {
      triggerIrFlash();
      playRemoteClickSound();
      state.powerOn = !state.powerOn;
      if (wallClockEl) wallClockEl.style.opacity = state.powerOn ? '1' : '0.2';
      if (remoteOledDisplay) remoteOledDisplay.style.opacity = state.powerOn ? '1' : '0.2';
    });
  }

  // Sound toggle
  function toggleSound() {
    state.soundEnabled = !state.soundEnabled;
    const icon = state.soundEnabled ? '🔊' : '🔇';
    if (soundIcon) soundIcon.textContent = icon;
    triggerIrFlash();
    if (state.soundEnabled) playRemoteClickSound();
  }

  if (soundToggleBtn) soundToggleBtn.addEventListener('click', toggleSound);
  if (remoteMuteBtn) remoteMuteBtn.addEventListener('click', toggleSound);

  // ==========================================================================
  // Voice Access System (SpeechRecognition + Text-To-Speech)
  // ==========================================================================
  const voiceAssistantBanner = document.getElementById('voiceAssistantBanner');
  const voiceBannerTitle = document.getElementById('voiceBannerTitle');
  const voiceBannerTranscript = document.getElementById('voiceBannerTranscript');
  const voiceTextInput = document.getElementById('voiceTextInput');
  const voiceFallbackForm = document.getElementById('voiceFallbackForm');
  const voiceCloseBtn = document.getElementById('voiceCloseBtn');

  // Preload and cache speech synthesis voices
  let cachedVoices = [];
  function refreshVoices() {
    if ('speechSynthesis' in window) {
      cachedVoices = window.speechSynthesis.getVoices();
    }
  }
  refreshVoices();
  if ('speechSynthesis' in window && window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = refreshVoices;
  }

  // Comprehensive alias mapping for natural spoken country queries
  const COUNTRY_ALIASES = {
    // India / Kerala
    'in': 'IN', 'india': 'IN', 'kerala': 'IN', 'kochi': 'IN', 'cochin': 'IN',
    'delhi': 'IN', 'new delhi': 'IN', 'trivandrum': 'IN', 'mumbai': 'IN', 'bangalore': 'IN',
    'calicut': 'IN', 'kannur': 'IN', 'malabar': 'IN', 'kollam': 'IN',
    // USA
    'us': 'US', 'usa': 'US', 'america': 'US', 'united states': 'US', 'united states of america': 'US',
    'new york': 'US', 'california': 'US', 'washington': 'US', 'chicago': 'US', 'texas': 'US',
    // UK
    'gb': 'GB', 'uk': 'GB', 'britain': 'GB', 'great britain': 'GB', 'england': 'GB', 'london': 'GB', 'scotland': 'GB',
    // Japan
    'jp': 'JP', 'japan': 'JP', 'tokyo': 'JP', 'osaka': 'JP', 'kyoto': 'JP',
    // UAE
    'ae': 'AE', 'uae': 'AE', 'dubai': 'AE', 'emirates': 'AE', 'united arab emirates': 'AE', 'abu dhabi': 'AE', 'sharjah': 'AE',
    // Germany
    'de': 'DE', 'germany': 'DE', 'berlin': 'DE', 'munich': 'DE', 'deutschland': 'DE',
    // France
    'fr': 'FR', 'france': 'FR', 'paris': 'FR',
    // Australia
    'au': 'AU', 'australia': 'AU', 'sydney': 'AU', 'melbourne': 'AU',
    // Canada
    'ca': 'CA', 'canada': 'CA', 'toronto': 'CA', 'vancouver': 'CA', 'ottawa': 'CA',
    // Singapore
    'sg': 'SG', 'singapore': 'SG',
    // Brazil
    'br': 'BR', 'brazil': 'BR', 'brasil': 'BR', 'sao paulo': 'BR', 'rio': 'BR',
    // South Korea
    'kr': 'KR', 'korea': 'KR', 'south korea': 'KR', 'seoul': 'KR',
    // Saudi Arabia
    'sa': 'SA', 'saudi': 'SA', 'saudi arabia': 'SA', 'riyadh': 'SA', 'jeddah': 'SA',
    // Qatar
    'qa': 'QA', 'qatar': 'QA', 'doha': 'QA',
    // Kuwait
    'kw': 'KW', 'kuwait': 'KW', 'kuwait city': 'KW',
    // Italy
    'it': 'IT', 'italy': 'IT', 'italia': 'IT', 'rome': 'IT', 'milan': 'IT',
    // Spain
    'es': 'ES', 'spain': 'ES', 'espana': 'ES', 'madrid': 'ES', 'barcelona': 'ES',
    // Netherlands
    'nl': 'NL', 'netherlands': 'NL', 'holland': 'NL', 'amsterdam': 'NL',
    // Switzerland
    'ch': 'CH', 'switzerland': 'CH', 'swiss': 'CH', 'zurich': 'CH', 'geneva': 'CH',
    // Sweden
    'se': 'SE', 'sweden': 'SE', 'stockholm': 'SE',
    // Norway
    'no': 'NO', 'norway': 'NO', 'oslo': 'NO',
    // Denmark
    'dk': 'DK', 'denmark': 'DK', 'copenhagen': 'DK',
    // South Africa
    'za': 'ZA', 'south africa': 'ZA', 'johannesburg': 'ZA', 'cape town': 'ZA',
    // Egypt
    'eg': 'EG', 'egypt': 'EG', 'cairo': 'EG',
    // Russia
    'ru': 'RU', 'russia': 'RU', 'moscow': 'RU',
    // China
    'cn': 'CN', 'china': 'CN', 'beijing': 'CN', 'shanghai': 'CN',
    // Mexico
    'mx': 'MX', 'mexico': 'MX', 'mexico city': 'MX',
    // Thailand
    'th': 'TH', 'thailand': 'TH', 'bangkok': 'TH',
    // Indonesia
    'id': 'ID', 'indonesia': 'ID', 'jakarta': 'ID', 'bali': 'ID',
    // New Zealand
    'nz': 'NZ', 'new zealand': 'NZ', 'auckland': 'NZ', 'wellington': 'NZ',
    // Ireland
    'ie': 'IE', 'ireland': 'IE', 'dublin': 'IE',
    // Portugal
    'pt': 'PT', 'portugal': 'PT', 'lisbon': 'PT',
    // Greece
    'gr': 'GR', 'greece': 'GR', 'athens': 'GR',
    // Austria
    'at': 'AT', 'austria': 'AT', 'vienna': 'AT',
    // Belgium
    'be': 'BE', 'belgium': 'BE', 'brussels': 'BE',
    // Turkey
    'tr': 'TR', 'turkey': 'TR', 'istanbul': 'TR', 'ankara': 'TR'
  };

  // Malayalam time sentence formatter
  function formatMalayalamTime(h24, m) {
    let period = 'രാവിലെ';
    if (h24 >= 12 && h24 < 16) {
      period = 'ഉച്ചയ്ക്ക്';
    } else if (h24 >= 16 && h24 < 20) {
      period = 'വൈകിട്ട്';
    } else if (h24 >= 20 || h24 < 5) {
      period = 'രാത്രി';
    }

    let h12 = h24 % 12;
    if (h12 === 0) h12 = 12;

    if (m === 0) {
      return `ഇപ്പോൾ സമയം ${period} ${h12} മണി`;
    }
    return `ഇപ്പോൾ സമയം ${period} ${h12} മണി ${m} മിനിറ്റ്`;
  }

  // Speak time with Web Speech Synthesis
  function speakCurrentTime() {
    const country = COUNTRIES[state.currentIndex];
    const t = getTimeInZone(country.tz);
    const h12 = (t.hours % 12) === 0 ? 12 : (t.hours % 12);
    const period = t.hours >= 12 ? 'PM' : 'AM';
    const mm = String(t.minutes).padStart(2, '0');

    let mlPeriod = 'ravile';
    if (t.hours >= 12 && t.hours < 16) mlPeriod = 'uchaykku';
    else if (t.hours >= 16 && t.hours < 20) mlPeriod = 'vaikittu';
    else if (t.hours >= 20 || t.hours < 5) mlPeriod = 'rathri';

    const mlTranslit = `Ippol samayam ${mlPeriod} ${h12} mani ${t.minutes > 0 ? t.minutes + ' minittu' : ''}`;
    const mlScript = formatMalayalamTime(t.hours, t.minutes);

    const speechText = `The time in ${country.name} is ${h12}:${mm} ${period}. ${mlTranslit}.`;

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(speechText);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;

      if (!cachedVoices.length) {
        cachedVoices = window.speechSynthesis.getVoices();
      }

      // Prioritize Indian English voice or natural voice for authentic Malayalam pronunciation
      const indianVoice = cachedVoices.find(v => v.lang === 'en-IN' || v.lang.startsWith('en_IN'));
      const naturalVoice = cachedVoices.find(v => v.lang.startsWith('en') && !v.name.includes('Bad'));
      if (indianVoice) {
        utterance.voice = indianVoice;
      } else if (naturalVoice) {
        utterance.voice = naturalVoice;
      }

      window.speechSynthesis.speak(utterance);
    }
  }

  // Parse voice text and match country / commands
  function handleVoiceMatch(rawQuery) {
    if (!rawQuery) return;
    const q = rawQuery.toLowerCase().replace(/[^\w\s]/gi, '').trim();

    // 1. General Time Questions
    if (q.includes('what time') || q.includes('samayam') || q.includes('time now') || q === 'time' || q.includes('ethrayai') || q.includes('ethra')) {
      if (voiceBannerTitle) voiceBannerTitle.textContent = 'Speaking Time...';
      const c = COUNTRIES[state.currentIndex];
      const ml = formatMalayalamTime(getTimeInZone(c.tz).hours, getTimeInZone(c.tz).minutes);
      if (voiceBannerTranscript) voiceBannerTranscript.textContent = `${ml} (${c.name})`;
      speakCurrentTime();
      setTimeout(closeVoiceBanner, 3200);
      return;
    }

    // 2. Navigation Commands
    if (q.includes('next') || q.includes('forward')) {
      setCountry(state.currentIndex + 1);
      speakCurrentTime();
      setTimeout(closeVoiceBanner, 3000);
      return;
    }
    if (q.includes('previous') || q.includes('back')) {
      setCountry(state.currentIndex - 1);
      speakCurrentTime();
      setTimeout(closeVoiceBanner, 3000);
      return;
    }
    if (q.includes('home') || q === 'kerala') {
      setCountry(0);
      speakCurrentTime();
      setTimeout(closeVoiceBanner, 3000);
      return;
    }

    // 3. Country Matching via Alias Table
    let matchedCode = null;

    // Direct check in aliases
    for (const [alias, code] of Object.entries(COUNTRY_ALIASES)) {
      if (q === alias || q.split(' ').includes(alias)) {
        matchedCode = code;
        break;
      }
    }

    // Substring alias match if no exact word matched
    if (!matchedCode) {
      for (const [alias, code] of Object.entries(COUNTRY_ALIASES)) {
        if (q.includes(alias)) {
          matchedCode = code;
          break;
        }
      }
    }

    // Fallback search inside country name/city
    let targetIdx = -1;
    if (matchedCode) {
      targetIdx = COUNTRIES.findIndex(c => c.code === matchedCode);
    } else {
      targetIdx = COUNTRIES.findIndex(c => 
        q.includes(c.name.toLowerCase()) || 
        q.includes(c.code.toLowerCase()) || 
        c.name.toLowerCase().includes(q)
      );
    }

    if (targetIdx !== -1) {
      const selected = COUNTRIES[targetIdx];
      setCountry(targetIdx);
      if (voiceBannerTitle) voiceBannerTitle.textContent = `Tuned to ${selected.name}!`;
      const t = getTimeInZone(selected.tz);
      const ml = formatMalayalamTime(t.hours, t.minutes);
      if (voiceBannerTranscript) voiceBannerTranscript.textContent = `${ml} · ${selected.city.split('·')[0].trim()}`;
      if (oledCountry) oledCountry.textContent = selected.name.toUpperCase();
      speakCurrentTime();
      setTimeout(closeVoiceBanner, 3200);
    } else {
      if (voiceBannerTitle) voiceBannerTitle.textContent = `No match for "${rawQuery}"`;
      if (voiceBannerTranscript) voiceBannerTranscript.textContent = 'Try "Japan", "USA", "Dubai", "London", "Kerala", or type below:';
      if (oledCountry) {
        oledCountry.textContent = 'NO MATCH';
        setTimeout(() => {
          if (oledCountry) oledCountry.textContent = COUNTRIES[state.currentIndex].name.toUpperCase();
        }, 2000);
      }
    }
  }

  // ==========================================================================
  // Real Hardware Microphone & Visualizer Controller
  // ==========================================================================
  let activeMicStream = null;
  let micAudioContext = null;
  let micAnalyser = null;
  let micAnimFrame = null;
  const visualizerBars = document.querySelectorAll('.live-eq-bar');
  const voiceDbBadge = document.getElementById('voiceDbBadge');

  async function initRealMicrophone() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      return false;
    }

    try {
      // Direct hardware microphone access request (triggers native browser permission dialog)
      activeMicStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        }
      });

      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        if (!micAudioContext || micAudioContext.state === 'closed') {
          micAudioContext = new AudioCtx();
        }
        if (micAudioContext.state === 'suspended') {
          await micAudioContext.resume();
        }

        const source = micAudioContext.createMediaStreamSource(activeMicStream);
        micAnalyser = micAudioContext.createAnalyser();
        micAnalyser.fftSize = 64;
        micAnalyser.smoothingTimeConstant = 0.5;
        source.connect(micAnalyser);

        startVisualizerLoop();
      }

      if (voiceDbBadge) {
        voiceDbBadge.textContent = 'MIC LIVE';
        voiceDbBadge.style.color = '#86efac';
      }
      return true;
    } catch (err) {
      console.warn('Real microphone access denied or unavailable:', err);
      if (voiceDbBadge) {
        voiceDbBadge.textContent = 'MIC BLOCKED';
        voiceDbBadge.style.color = '#f87171';
      }
      return false;
    }
  }

  function startVisualizerLoop() {
    if (!micAnalyser) return;
    const freqData = new Uint8Array(micAnalyser.frequencyBinCount);

    function tickVisualizer() {
      if (!state.isListening) return;
      micAnalyser.getByteFrequencyData(freqData);

      let sum = 0;
      const bars = document.querySelectorAll('.live-eq-bar');
      bars.forEach((bar, idx) => {
        const val = freqData[idx % freqData.length] || 0;
        sum += val;
        const barH = Math.max(4, Math.min(22, (val / 255) * 26));
        bar.style.height = `${barH.toFixed(1)}px`;
      });

      const avgVolume = sum / (bars.length || 1);
      if (voiceDbBadge) {
        if (avgVolume > 15) {
          voiceDbBadge.textContent = 'HEARING AUDIO';
          voiceDbBadge.style.color = '#4ade80';
        } else {
          voiceDbBadge.textContent = 'MIC LIVE';
          voiceDbBadge.style.color = '#86efac';
        }
      }

      micAnimFrame = requestAnimationFrame(tickVisualizer);
    }

    if (micAnimFrame) cancelAnimationFrame(micAnimFrame);
    micAnimFrame = requestAnimationFrame(tickVisualizer);
  }

  function stopRealMicrophone() {
    if (micAnimFrame) {
      cancelAnimationFrame(micAnimFrame);
      micAnimFrame = null;
    }
    if (activeMicStream) {
      activeMicStream.getTracks().forEach(track => track.stop());
      activeMicStream = null;
    }
    document.querySelectorAll('.live-eq-bar').forEach(bar => {
      bar.style.height = '4px';
    });
    if (voiceDbBadge) {
      voiceDbBadge.textContent = 'MIC OFF';
      voiceDbBadge.style.color = '#94a3b8';
    }
  }

  function openVoiceBanner() {
    if (voiceAssistantBanner) {
      voiceAssistantBanner.classList.add('active');
    }
    if (voiceBannerTitle) voiceBannerTitle.textContent = 'Connecting Microphone...';
    if (voiceBannerTranscript) voiceBannerTranscript.textContent = 'Say any country (e.g. "Japan", "USA", "Dubai", "London", "Kerala")';
    if (voiceTextInput) {
      voiceTextInput.value = '';
      setTimeout(() => voiceTextInput.focus(), 150);
    }
    if (remoteVoiceBtn) remoteVoiceBtn.classList.add('listening');
    if (oledCountry) oledCountry.textContent = 'LISTENING...';
  }

  function closeVoiceBanner() {
    if (voiceAssistantBanner) {
      voiceAssistantBanner.classList.remove('active');
    }
    if (remoteVoiceBtn) remoteVoiceBtn.classList.remove('listening');
    if (oledCountry && oledCountry.textContent === 'LISTENING...') {
      oledCountry.textContent = COUNTRIES[state.currentIndex].name.toUpperCase();
    }
    state.isListening = false;
    if (activeRecognizer) {
      try { activeRecognizer.stop(); } catch (e) {}
      activeRecognizer = null;
    }
    stopRealMicrophone();
  }

  if (voiceCloseBtn) {
    voiceCloseBtn.addEventListener('click', closeVoiceBanner);
  }

  if (voiceFallbackForm) {
    voiceFallbackForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = voiceTextInput.value.trim();
      if (val) handleVoiceMatch(val);
    });
  }

  let activeRecognizer = null;

  async function startVoiceAccess() {
    triggerIrFlash();
    playRemoteClickSound();

    // Toggle off if already actively listening and banner open
    if (state.isListening && voiceAssistantBanner && voiceAssistantBanner.classList.contains('active')) {
      closeVoiceBanner();
      return;
    }

    openVoiceBanner();
    state.isListening = true;

    // 1. Activate Real Hardware Microphone & Visualizer
    const micGranted = await initRealMicrophone();

    if (!micGranted) {
      if (voiceBannerTitle) voiceBannerTitle.textContent = 'Microphone Blocked';
      if (voiceBannerTranscript) voiceBannerTranscript.textContent = 'Allow microphone in address bar (🔒 icon), or type country name below:';
      if (voiceTextInput) voiceTextInput.focus();
    } else {
      if (voiceBannerTitle) voiceBannerTitle.textContent = 'Microphone Live · Listening...';
      if (voiceBannerTranscript) voiceBannerTranscript.textContent = 'Say any country (e.g. "Japan", "USA", "Dubai", "London", "Kerala")';
    }

    // 2. Initialize Speech Recognition
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRec) {
      if (voiceBannerTitle) voiceBannerTitle.textContent = 'Microphone Live';
      if (voiceBannerTranscript) voiceBannerTranscript.textContent = 'Speech recognition engine not supported in this browser. Please type below:';
      if (voiceTextInput) voiceTextInput.focus();
      return;
    }

    if (activeRecognizer) {
      try { activeRecognizer.stop(); } catch (e) {}
    }

    try {
      activeRecognizer = new SpeechRec();
      activeRecognizer.lang = 'en-US';
      activeRecognizer.interimResults = true;
      activeRecognizer.maxAlternatives = 3;

      activeRecognizer.onstart = () => {
        if (voiceBannerTitle && micGranted) {
          voiceBannerTitle.textContent = 'Listening to Microphone...';
        }
      };

      activeRecognizer.onresult = (evt) => {
        let transcript = '';
        let matched = false;
        for (let i = evt.resultIndex; i < evt.results.length; i++) {
          for (let j = 0; j < evt.results[i].length; j++) {
            const candidate = evt.results[i][j].transcript.trim();
            if (evt.results[i].isFinal) {
              matched = true;
              if (voiceBannerTranscript) voiceBannerTranscript.textContent = `Heard: "${candidate}"`;
              handleVoiceMatch(candidate);
              break;
            } else {
              transcript = candidate;
            }
          }
          if (matched) break;
        }
        if (!matched && transcript && voiceBannerTranscript) {
          voiceBannerTranscript.textContent = `Hearing: "${transcript}"...`;
        }
      };

      activeRecognizer.onerror = (err) => {
        console.warn('SpeechRecognition error:', err.error);
        if (err.error === 'not-allowed') {
          if (voiceBannerTitle) voiceBannerTitle.textContent = 'Microphone Blocked';
          if (voiceBannerTranscript) voiceBannerTranscript.textContent = 'Allow microphone in address bar (🔒 icon), or type country name below:';
        } else if (err.error === 'no-speech') {
          if (state.isListening && activeRecognizer) {
            try { activeRecognizer.start(); } catch (e) {}
          }
        } else if (err.error === 'network') {
          if (voiceBannerTitle) voiceBannerTitle.textContent = 'Offline Microphone';
          if (voiceBannerTranscript) voiceBannerTranscript.textContent = 'Speech server unreachable. Type country name and press Enter:';
          if (voiceTextInput) voiceTextInput.focus();
        }
      };

      activeRecognizer.onend = () => {
        if (state.isListening) {
          try { activeRecognizer.start(); } catch (e) {}
        } else {
          activeRecognizer = null;
        }
      };

      activeRecognizer.start();
    } catch (err) {
      console.warn('SpeechRecognition start error:', err);
      if (voiceBannerTitle) voiceBannerTitle.textContent = 'Voice Assistant Ready';
      if (voiceBannerTranscript) voiceBannerTranscript.textContent = 'Type a country name and press Enter:';
      if (voiceTextInput) voiceTextInput.focus();
    }
  }

  if (remoteVoiceBtn) {
    remoteVoiceBtn.addEventListener('click', startVoiceAccess);
  }

  // Keyboard Navigation: Up/Down arrow keys change channel, Space or Enter speaks
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      setCountry(state.currentIndex - 1);
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      setCountry(state.currentIndex + 1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      triggerIrFlash();
      playRemoteClickSound();
      speakCurrentTime();
    } else if (e.key === 'v' || e.key === 'V') {
      e.preventDefault();
      startVoiceAccess();
    } else if (e.key === 'Escape') {
      closeVoiceBanner();
    }
  });

})();
