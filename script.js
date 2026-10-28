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
    powerOn: true,
    tvPowerOn: true,
    tvSelectedChoice: 'malayalam', // 'malayalam' | 'english'
    tvKnobAngle: 0,
    tvContrastLevel: 1.0,
    activeProject: 'clock' // 'clock' | 'violin' | 'torch'
  };

  // DOM Elements
  const heroTextContainer = document.getElementById('heroTextContainer');
  const clockOverlayLayer = document.getElementById('clockOverlayLayer');
  const violinOverlayLayer = document.getElementById('violinOverlayLayer');
  const torchOverlayLayer = document.getElementById('torchOverlayLayer');
  const remoteOverlayLayer = document.getElementById('remoteOverlayLayer');
  const scrollStoryTrack = document.getElementById('scrollStoryTrack');
  const scrollCta = document.getElementById('scrollCta');
  const brandLogo = document.getElementById('brandLogo');

  // Violin Stage Elements
  const salvagePinionGear = document.getElementById('salvagePinionGear');
  const salvageLinearRack = document.getElementById('salvageLinearRack');
  const potShaft = document.getElementById('potShaft');
  const salvagedViolinBody = document.getElementById('salvagedViolinBody');
  const violinStatusTag = document.getElementById('violinStatusTag');
  const violinPercentBadge = document.getElementById('violinPercentBadge');
  const violinPotValue = document.getElementById('violinPotValue');
  const violinAudioValue = document.getElementById('violinAudioValue');
  const violinMechValue = document.getElementById('violinMechValue');

  // Torch Stage Elements
  const torchBeamCone = document.getElementById('torchBeamCone');
  const beamLightCore = document.getElementById('beamLightCore');
  const torchLedEmitter = document.getElementById('torchLedEmitter');
  const emitterGlow = document.getElementById('emitterGlow');
  const torchSwitchRocker = document.getElementById('torchSwitchRocker');
  const torchStatusTag = document.getElementById('torchStatusTag');
  const torchKelvinBadge = document.getElementById('torchKelvinBadge');
  const torchColorName = document.getElementById('torchColorName');
  const torchHexValue = document.getElementById('torchHexValue');
  const torchWavelength = document.getElementById('torchWavelength');

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

  // Stage 4 Scrapped TV Elements (Dedicated Language Choice Terminal)
  const tvOverlayLayer = document.getElementById('tvOverlayLayer');
  const scrappedTv = document.getElementById('scrappedTv');
  const tvScreenGlass = document.getElementById('tvScreenGlass');
  const tvPromptView = document.getElementById('tvPromptView');
  const choiceMalayalamBtn = document.getElementById('choiceMalayalamBtn');
  const choiceEnglishBtn = document.getElementById('choiceEnglishBtn');
  const crtStaticOverlay = document.getElementById('crtStaticOverlay');
  const tvChannelKnob = document.getElementById('tvChannelKnob');
  const tvVolumeKnob = document.getElementById('tvVolumeKnob');
  const tvPowerSwitch = document.getElementById('tvPowerSwitch');
  const tvPilotLamp = document.getElementById('tvPilotLamp');
  const tvHudCh = document.getElementById('tvHudCh');
  const hudTelemetry = document.getElementById('hudTelemetry');

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

  // Scroll restoration: If coming back with #tv hash, scroll to TV stage, else top
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  if (window.location.hash === '#tv') {
    setTimeout(() => {
      const maxScroll = Math.max(scrollStoryTrack ? scrollStoryTrack.offsetHeight - window.innerHeight : 1, 1);
      window.scrollTo({ top: maxScroll * 0.9, behavior: 'smooth' });
    }, 120);
  } else {
    window.scrollTo(0, 0);
  }

  // ==========================================================================
  // Web Audio TV Synthesizer (Rotary click, CRT static burst)
  // ==========================================================================
  function playTvKnobClick() {
    if (!state.soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtx) audioCtx = new AudioCtx();
      if (audioCtx.state === 'suspended') audioCtx.resume();

      const t = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(440, t);
      osc.frequency.exponentialRampToValueAtTime(110, t + 0.025);

      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.025);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(t);
      osc.stop(t + 0.03);
    } catch (e) {}
  }

  function playCrtStaticSound() {
    if (!state.soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtx) audioCtx = new AudioCtx();
      if (audioCtx.state === 'suspended') audioCtx.resume();

      const bufferSize = audioCtx.sampleRate * 0.12;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = audioCtx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1600;
      filter.Q.value = 2.0;

      const gain = audioCtx.createGain();
      gain.gain.setValueAtTime(0.16, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.11);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);
      whiteNoise.start();
    } catch (e) {}
  }

  function triggerCrtStatic() {
    playCrtStaticSound();
    if (crtStaticOverlay) {
      crtStaticOverlay.classList.add('flash');
      setTimeout(() => {
        crtStaticOverlay.classList.remove('flash');
      }, 160);
    }
  }

  // ==========================================================================
  // TV Choice Selection Terminal Engine
  // The TV screen exclusively hosts the choice selection; the story is in story.html
  // ==========================================================================
  function setTvChoice(lang) {
    state.tvSelectedChoice = lang;
    if (lang === 'malayalam') {
      if (choiceMalayalamBtn) choiceMalayalamBtn.classList.add('selected-choice');
      if (choiceEnglishBtn) choiceEnglishBtn.classList.remove('selected-choice');
      if (tvHudCh) tvHudCh.textContent = 'VHF CH 01 · മലയാളം';
      if (hudTelemetry) hudTelemetry.textContent = 'CH 01 ACTIVE';
    } else {
      if (choiceEnglishBtn) choiceEnglishBtn.classList.add('selected-choice');
      if (choiceMalayalamBtn) choiceMalayalamBtn.classList.remove('selected-choice');
      if (tvHudCh) tvHudCh.textContent = 'VHF CH 02 · ENGLISH';
      if (hudTelemetry) hudTelemetry.textContent = 'CH 02 ACTIVE';
    }
  }

  function launchStory(lang) {
    triggerCrtStatic();
    const btn = lang === 'malayalam' ? choiceMalayalamBtn : choiceEnglishBtn;
    if (btn) {
      btn.style.transform = 'scale(0.96)';
      btn.innerHTML = `
        <div class="choice-active-indicator" style="opacity: 1;">TUNING SIGNAL</div>
        <span class="choice-tag">TUNING CHANNEL...</span>
        <span class="choice-primary">${lang === 'malayalam' ? 'ലോഡിംഗ്...' : 'Loading Story...'}</span>
        <span class="choice-sub">Opening Story Page &rarr;</span>
      `;
    }
    const targetUrl = lang === 'malayalam' ? 'story.html?lang=ml' : 'story.html?lang=en';
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 280);
  }

  if (choiceMalayalamBtn) {
    choiceMalayalamBtn.addEventListener('click', () => {
      setTvChoice('malayalam');
      launchStory('malayalam');
    });
    choiceMalayalamBtn.addEventListener('mouseenter', () => {
      setTvChoice('malayalam');
    });
  }

  if (choiceEnglishBtn) {
    choiceEnglishBtn.addEventListener('click', () => {
      setTvChoice('english');
      launchStory('english');
    });
    choiceEnglishBtn.addEventListener('mouseenter', () => {
      setTvChoice('english');
    });
  }

  // TV Channel Rotary Knob: Rotates and switches between Malayalam and English
  if (tvChannelKnob) {
    tvChannelKnob.addEventListener('click', () => {
      state.tvKnobAngle = (state.tvKnobAngle + 45) % 360;
      tvChannelKnob.style.transform = `rotate(${state.tvKnobAngle}deg)`;
      playTvKnobClick();
      triggerCrtStatic();
      const nextChoice = state.tvSelectedChoice === 'malayalam' ? 'english' : 'malayalam';
      setTvChoice(nextChoice);
    });
  }

  // Ambient subtle CRT glitch flicker
  setInterval(() => {
    if (state.tvPowerOn && tvPromptView && Math.random() > 0.45 && crtStaticOverlay) {
      crtStaticOverlay.classList.add('flash');
      setTimeout(() => {
        if (crtStaticOverlay) crtStaticOverlay.classList.remove('flash');
      }, 90);
    }
  }, 4200);

  // Keyboard navigation for TV choices
  window.addEventListener('keydown', (e) => {
    const scrollTop = window.scrollY || window.pageYOffset;
    const maxScroll = Math.max(scrollStoryTrack ? scrollStoryTrack.offsetHeight - window.innerHeight : 1, 1);
    const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
    if (progress < 0.65) return;

    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      setTvChoice('malayalam');
      playTvKnobClick();
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      setTvChoice('english');
      playTvKnobClick();
    } else if (e.key === 'Enter') {
      launchStory(state.tvSelectedChoice);
    }
  });

  if (tvChannelKnob) {
    tvChannelKnob.addEventListener('click', () => {
      state.tvKnobAngle = (state.tvKnobAngle + 45) % 360;
      tvChannelKnob.style.transform = `rotate(${state.tvKnobAngle}deg)`;
      playTvKnobClick();
      if (state.tvScreenMode === 'movie') {
        const nextLang = state.tvLang === 'malayalam' ? 'english' : 'malayalam';
        renderStory(nextLang);
      }
      triggerCrtStatic();
    });
  }

  if (tvVolumeKnob) {
    tvVolumeKnob.addEventListener('click', () => {
      playTvKnobClick();
      state.tvContrastLevel = state.tvContrastLevel >= 1.3 ? 0.85 : state.tvContrastLevel + 0.15;
      if (tvScreenGlass) {
        tvScreenGlass.style.filter = `contrast(${state.tvContrastLevel}) brightness(${state.tvContrastLevel * 0.95})`;
      }
      triggerCrtStatic();
    });
  }

  if (tvPowerSwitch) {
    tvPowerSwitch.addEventListener('click', () => {
      playTvKnobClick();
      state.tvPowerOn = !state.tvPowerOn;
      if (state.tvPowerOn) {
        tvPowerSwitch.classList.add('active');
        if (tvPilotLamp) tvPilotLamp.classList.add('lit');
        if (tvScreenGlass) tvScreenGlass.classList.remove('tv-off');
        triggerCrtStatic();
      } else {
        tvPowerSwitch.classList.remove('active');
        if (tvPilotLamp) tvPilotLamp.classList.remove('lit');
        if (tvScreenGlass) tvScreenGlass.classList.add('tv-off');
      }
    });
  }

  // ==========================================================================
  // Stage 2 Multi-Project Animator Functions
  // ==========================================================================
  function hideAllStage2Layers() {
    [clockOverlayLayer, violinOverlayLayer, torchOverlayLayer].forEach(layer => {
      if (!layer) return;
      layer.style.opacity = '0';
      layer.style.visibility = 'hidden';
      layer.style.pointerEvents = 'none';
    });
  }

  function renderActiveStage2(projectKey, opacity, scale, subProgress) {
    // Hide inactive layers
    if (projectKey !== 'clock' && clockOverlayLayer) {
      clockOverlayLayer.style.opacity = '0';
      clockOverlayLayer.style.visibility = 'hidden';
      clockOverlayLayer.style.pointerEvents = 'none';
    }
    if (projectKey !== 'violin' && violinOverlayLayer) {
      violinOverlayLayer.style.opacity = '0';
      violinOverlayLayer.style.visibility = 'hidden';
      violinOverlayLayer.style.pointerEvents = 'none';
    }
    if (projectKey !== 'torch' && torchOverlayLayer) {
      torchOverlayLayer.style.opacity = '0';
      torchOverlayLayer.style.visibility = 'hidden';
      torchOverlayLayer.style.pointerEvents = 'none';
    }

    // 1. CLOCK
    if (projectKey === 'clock' && clockOverlayLayer) {
      clockOverlayLayer.style.visibility = opacity > 0.01 ? 'visible' : 'hidden';
      clockOverlayLayer.style.opacity = opacity.toFixed(3);
      clockOverlayLayer.style.transform = `translate(-50%, -50%) scale(${scale.toFixed(3)})`;
      clockOverlayLayer.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';
    }
    // 2. VIOLIN: First Rack & Pinion gear rotating ALONE, then transitions to Violin ALONE (Zero Overlap like Clock -> Remote)
    else if (projectKey === 'violin' && violinOverlayLayer) {
      violinOverlayLayer.style.visibility = opacity > 0.01 ? 'visible' : 'hidden';
      violinOverlayLayer.style.opacity = opacity.toFixed(3);
      violinOverlayLayer.style.transform = `translate(-50%, -50%) scale(${scale.toFixed(3)})`;
      violinOverlayLayer.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';

      // subProgress goes 0.0 -> 1.0
      // PHASE 1: 0.00 -> 0.48: RACK & PINION ALONE IN CENTER (Mechanical gear & potentiometer rig)
      // TRANSITION: 0.48 -> 0.52: Rack & Pinion exits
      // PHASE 2: 0.52 -> 1.00: VIOLIN ALONE IN CENTER (The completed electronic instrument with strings, bridge, sound)
      
      if (subProgress < 0.48) {
        // === PHASE 1: RACK & PINION ALONE ===
        const rackPhaseP = subProgress / 0.48; // 0 to 1
        const gearAngle = rackPhaseP * 1080; // 3 full 360 rotations!
        const rackShift = Math.sin(rackPhaseP * Math.PI * 4) * 65; // linear rack sliding back & forth
        const potResistance = (rackPhaseP * 10).toFixed(1);

        // Rack & Pinion fully visible and active
        if (salvagePinionGear) {
          salvagePinionGear.style.opacity = '1';
          salvagePinionGear.style.transform = `rotate(${gearAngle}deg)`;
        }
        if (salvageLinearRack) {
          salvageLinearRack.style.opacity = '1';
          salvageLinearRack.style.transform = `translateX(${rackShift}px)`;
        }
        if (potShaft) {
          potShaft.style.transform = `translate(-50%, -50%) rotate(${gearAngle * 0.75}deg)`;
        }

        // Violin Body strictly hidden
        if (salvagedViolinBody) {
          salvagedViolinBody.style.opacity = '0';
          salvagedViolinBody.style.visibility = 'hidden';
          salvagedViolinBody.style.transform = 'translate(-50%, calc(-50% + 120px)) scale(0.65)';
        }

        // Telemetry HUD for Rack & Pinion
        if (violinStatusTag) {
          violinStatusTag.textContent = 'STAGE 01: SALVAGED RACK & PINION GEAR';
        }
        if (violinPercentBadge) {
          violinPercentBadge.textContent = `GEAR ROTATION: ${Math.round(rackPhaseP * 100)}%`;
        }
        if (violinPotValue) {
          violinPotValue.textContent = `${potResistance} kΩ (SLIDING)`;
        }
        if (violinAudioValue) {
          violinAudioValue.textContent = 'MECHANICAL INPUT';
        }

      } else if (subProgress < 0.52) {
        // === TRANSITION GAP: Rack & Pinion fades out, Violin prepares to enter (Zero overlap) ===
        const t = (subProgress - 0.48) / 0.04; // 0 to 1
        const easeOut = t * t * (3 - 2 * t);

        if (salvagePinionGear) {
          salvagePinionGear.style.opacity = (1 - easeOut).toFixed(2);
          salvagePinionGear.style.transform = `rotate(${1080 + t * 90}deg) scale(${(1 - easeOut * 0.2).toFixed(2)})`;
        }
        if (salvageLinearRack) {
          salvageLinearRack.style.opacity = (1 - easeOut).toFixed(2);
        }

        if (salvagedViolinBody) {
          salvagedViolinBody.style.opacity = '0';
          salvagedViolinBody.style.visibility = 'hidden';
        }

        if (violinStatusTag) {
          violinStatusTag.textContent = 'TRANSITION: TRANSFORMING TO VIOLIN';
        }

      } else {
        // === PHASE 2: VIOLIN ALONE IN CENTER (0.52 -> 1.00) ===
        const violinPhaseP = (subProgress - 0.52) / 0.48; // 0 to 1
        const easeIn = Math.min(violinPhaseP / 0.25, 1);
        const smoothViolinP = easeIn * easeIn * (3 - 2 * easeIn);

        // Rack & Pinion strictly hidden
        if (salvagePinionGear) {
          salvagePinionGear.style.opacity = '0';
          salvagePinionGear.style.transform = 'scale(0.5)';
        }
        if (salvageLinearRack) {
          salvageLinearRack.style.opacity = '0';
        }

        // Violin Body alone in center!
        if (salvagedViolinBody) {
          salvagedViolinBody.style.visibility = 'visible';
          salvagedViolinBody.style.opacity = smoothViolinP.toFixed(3);
          const vScale = 0.82 + (0.18 * smoothViolinP);
          const vY = (1 - smoothViolinP) * 80;
          salvagedViolinBody.style.transform = `translate(-50%, calc(-50% + ${vY.toFixed(1)}px)) scale(${vScale.toFixed(3)})`;
        }

        // Telemetry HUD for Violin
        const freq = Math.round(220 + violinPhaseP * 660);
        if (violinStatusTag) {
          violinStatusTag.textContent = 'STAGE 02: ABSOLUTE VIOLIN SYNTHESIZER';
        }
        if (violinPercentBadge) {
          violinPercentBadge.textContent = 'SYNTH ASSEMBLED';
        }
        if (violinPotValue) {
          violinPotValue.textContent = '10.0 kΩ (BOW ENGAGED)';
        }
        if (violinAudioValue) {
          violinAudioValue.textContent = `${freq} Hz (AUDIO SYNTH)`;
        }
      }
    }
    // 3. TORCH: Off at first, changing colors as you scroll, till it reaches pure bright white at scroll end
    else if (projectKey === 'torch' && torchOverlayLayer) {
      torchOverlayLayer.style.visibility = opacity > 0.01 ? 'visible' : 'hidden';
      torchOverlayLayer.style.opacity = opacity.toFixed(3);
      torchOverlayLayer.style.transform = `translate(-50%, -50%) scale(${scale.toFixed(3)})`;
      torchOverlayLayer.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';

      // subProgress:
      // 0.00 -> 0.12: Torch is OFF (no beam, black emitter, rocker switch in off position)
      // 0.12 -> 0.85: Torch clicks ON, cycling through vibrant rainbow hues (Red -> Orange -> Yellow -> Green -> Cyan -> Blue -> Purple -> Magenta)
      // 0.85 -> 1.00: Transitions smoothly to intense brilliant PURE WHITE BEAM (#FFFFFF, 6500K daylight white)
      if (subProgress <= 0.12) {
        // OFF STATE
        if (torchBeamCone) torchBeamCone.style.opacity = '0';
        if (torchSwitchRocker) torchSwitchRocker.classList.remove('switched-on');
        if (emitterGlow) emitterGlow.style.opacity = '0';
        if (emitterGlow) emitterGlow.style.background = '#000000';
        if (torchStatusTag) torchStatusTag.textContent = 'BEAM STATE: POWER OFF';
        if (torchKelvinBadge) torchKelvinBadge.textContent = '0 LUMENS // OFF';
        if (torchColorName) torchColorName.textContent = 'BLACK // OFF';
        if (torchHexValue) torchHexValue.textContent = '#000000';
        if (torchWavelength) torchWavelength.textContent = '0 nm (DARK)';
      } else if (subProgress < 0.85) {
        // COLOR CYCLING SPECTRUM
        if (torchSwitchRocker) torchSwitchRocker.classList.add('switched-on');
        const colorProgress = (subProgress - 0.12) / 0.73; // 0 to 1
        const hue = Math.round(colorProgress * 360);
        const colorRgb = `hsl(${hue}, 100%, 55%)`;
        const glowColor = `hsla(${hue}, 100%, 60%, 0.85)`;
        const beamColor = `radial-gradient(ellipse at 15% 50%, hsla(${hue}, 100%, 65%, 0.95) 0%, hsla(${hue}, 100%, 55%, 0.7) 40%, hsla(${hue}, 100%, 45%, 0.15) 80%, transparent 100%)`;

        if (torchBeamCone) {
          torchBeamCone.style.opacity = '1';
          torchBeamCone.style.background = beamColor;
          torchBeamCone.style.filter = `drop-shadow(0 0 45px hsla(${hue}, 100%, 50%, 0.6))`;
        }
        if (emitterGlow) {
          emitterGlow.style.opacity = '1';
          emitterGlow.style.background = glowColor;
          emitterGlow.style.boxShadow = `0 0 35px 12px hsla(${hue}, 100%, 60%, 0.9)`;
        }

        const colorNames = [
          'NEON RED', 'ORANGE FLAME', 'AMBER GOLD', 'LIME GREEN', 'EMERALD JADE',
          'CYAN BEACON', 'SKY BLUE', 'ROYAL INDIGO', 'VIOLET PULSE', 'DEEP MAGENTA'
        ];
        const nameIdx = Math.min(Math.floor(colorProgress * colorNames.length), colorNames.length - 1);
        const lumens = Math.round(150 + colorProgress * 650);
        const approxNm = Math.round(700 - colorProgress * 300);

        if (torchStatusTag) torchStatusTag.textContent = 'BEAM STATE: RGB CYCLING SPECTRUM';
        if (torchKelvinBadge) torchKelvinBadge.textContent = `${lumens} LUMENS // ACTIVE`;
        if (torchColorName) torchColorName.textContent = colorNames[nameIdx];
        if (torchHexValue) torchHexValue.textContent = colorRgb;
        if (torchWavelength) torchWavelength.textContent = `${approxNm} nm SPECTRUM`;
      } else {
        // 0.85 -> 1.00: REACHES WHITE AT SCROLL END!
        if (torchSwitchRocker) torchSwitchRocker.classList.add('switched-on');
        const whiteProgress = (subProgress - 0.85) / 0.15; // 0 to 1
        const whiteBeam = `radial-gradient(ellipse at 15% 50%, rgba(255, 255, 255, 0.98) 0%, rgba(240, 248, 255, 0.85) 45%, rgba(225, 240, 255, 0.25) 85%, transparent 100%)`;

        if (torchBeamCone) {
          torchBeamCone.style.opacity = '1';
          torchBeamCone.style.background = whiteBeam;
          torchBeamCone.style.filter = `drop-shadow(0 0 65px rgba(255, 255, 255, 0.9))`;
        }
        if (emitterGlow) {
          emitterGlow.style.opacity = '1';
          emitterGlow.style.background = '#ffffff';
          emitterGlow.style.boxShadow = '0 0 50px 18px rgba(255, 255, 255, 1)';
        }

        if (torchStatusTag) torchStatusTag.textContent = 'BEAM STATE: MAXIMUM WHITE OUTPUT';
        if (torchKelvinBadge) torchKelvinBadge.textContent = '1200 LUMENS // 6500K';
        if (torchColorName) torchColorName.textContent = 'PURE DAYLIGHT WHITE';
        if (torchHexValue) torchHexValue.textContent = '#FFFFFF';
        if (torchWavelength) torchWavelength.textContent = 'ALL WAVELENGTHS (WHITE)';
      }
    }
  }

  // ==========================================================================
  // Zero-Overlap 4-Stage Scroll Experience:
  // Stage 1 (0.00 -> 0.16): "samayam ethrayai" editorial typography alone.
  // Stage 2 (0.16 -> 0.42): Active Project ALONE in center (Only It).
  // Stage 3 (0.42 -> 0.70): Authentic TV Remote ALONE in center (Only It).
  // Stage 4 (0.70 -> 1.00): Scrapped & Broken Retro TV ALONE in center (Only It).
  // ==========================================================================
  function onScroll() {
    if (!scrollStoryTrack || !heroTextContainer || !clockOverlayLayer || !remoteOverlayLayer || !tvOverlayLayer) return;

    const scrollTop = window.scrollY || window.pageYOffset;
    const maxScroll = Math.max(scrollStoryTrack.offsetHeight - window.innerHeight, 1);
    const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);

    // ------------------------------------------------------------------------
    // STAGE 1: Hero Typography & Selector (0.00 to 0.16)
    // ------------------------------------------------------------------------
    if (progress <= 0.16) {
      // 1. Text Layer
      const textP = progress / 0.14;
      const textOpacity = Math.max(1 - textP, 0);
      const textY = -textP * 40;
      heroTextContainer.style.visibility = textOpacity > 0.01 ? 'visible' : 'hidden';
      heroTextContainer.style.opacity = textOpacity.toFixed(3);
      heroTextContainer.style.transform = `translate(-50%, calc(-50% + ${textY.toFixed(1)}px)) scale(${1 - textP * 0.05})`;
      heroTextContainer.style.pointerEvents = textOpacity < 0.2 ? 'none' : 'auto';

      // 2. Stage 2 Layers (Clock, Violin, Torch): All Hidden
      hideAllStage2Layers();

      // 3. Remote: Hidden
      remoteOverlayLayer.style.opacity = '0';
      remoteOverlayLayer.style.visibility = 'hidden';
      remoteOverlayLayer.style.pointerEvents = 'none';
      remoteOverlayLayer.style.transform = 'translate(-50%, calc(-50% + 180px)) scale(0.65)';
      remoteOverlayLayer.classList.remove('active-interact');

      // 4. TV: Hidden
      tvOverlayLayer.style.opacity = '0';
      tvOverlayLayer.style.visibility = 'hidden';
      tvOverlayLayer.style.pointerEvents = 'none';
      tvOverlayLayer.style.transform = 'translate(-50%, calc(-50% + 220px)) scale(0.68)';
      tvOverlayLayer.classList.remove('active-interact');
    }
    // ------------------------------------------------------------------------
    // STAGE 2: Active Project ALONE in center
    // - If Clock: 0.16 -> 0.42
    // - If Violin or Torch (No Remote): 0.16 -> 0.70 (extended full animation pattern like clock + remote)
    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    // STAGE 2: Active Project ALONE in center
    // - If Clock: 0.16 -> 0.42 (then proceeds to Remote & Retro TV)
    // - If Violin or Torch: 0.16 -> 0.98 (NO TV, NO Remote, stays in white canvas)
    // ------------------------------------------------------------------------
    else if (state.activeProject !== 'clock' || progress <= 0.42) {
      // Text: Hidden
      heroTextContainer.style.opacity = '0';
      heroTextContainer.style.visibility = 'hidden';
      heroTextContainer.style.pointerEvents = 'none';

      // Remote: Hidden (Only clock uses remote)
      remoteOverlayLayer.style.opacity = '0';
      remoteOverlayLayer.style.visibility = 'hidden';
      remoteOverlayLayer.style.pointerEvents = 'none';
      remoteOverlayLayer.style.transform = 'translate(-50%, calc(-50% + 180px)) scale(0.65)';
      remoteOverlayLayer.classList.remove('active-interact');

      // TV: Strictly Hidden for Violin & Torch (and before clock remote)
      tvOverlayLayer.style.opacity = '0';
      tvOverlayLayer.style.visibility = 'hidden';
      tvOverlayLayer.style.pointerEvents = 'none';
      tvOverlayLayer.style.transform = 'translate(-50%, calc(-50% + 220px)) scale(0.68)';
      tvOverlayLayer.classList.remove('active-interact');

      // Calculate smooth in/out opacity and scale for Stage 2
      let stage2Opacity = 1;
      let stage2Scale = 1.0;
      let stage2Progress = 0;

      if (state.activeProject === 'clock') {
        // Clock timing (0.16 -> 0.42)
        if (progress < 0.24) {
          const pIn = (progress - 0.16) / 0.08;
          const easeIn = pIn * pIn * (3 - 2 * pIn);
          stage2Opacity = easeIn;
          stage2Scale = 0.75 + (0.25 * easeIn);
        } else if (progress > 0.35) {
          const pOut = (progress - 0.35) / 0.07;
          const easeOut = pOut * pOut * (3 - 2 * pOut);
          stage2Opacity = 1 - easeOut;
          stage2Scale = 1.0 - (0.25 * easeOut);
        }
        stage2Progress = Math.min(Math.max((progress - 0.16) / 0.26, 0), 1);
      } else {
        // Violin & Torch: Full scroll experience on clean white background (0.16 -> 0.98, zero TV)
        if (progress < 0.24) {
          const pIn = (progress - 0.16) / 0.08;
          const easeIn = pIn * pIn * (3 - 2 * pIn);
          stage2Opacity = easeIn;
          stage2Scale = 0.8 + (0.2 * easeIn);
        } else if (progress > 0.88) {
          const pOut = (progress - 0.88) / 0.10;
          const easeOut = pOut * pOut * (3 - 2 * pOut);
          stage2Opacity = 1 - easeOut;
          stage2Scale = 1.0 - (0.15 * easeOut);
        }
        // Sub-progress scales over the entire comfortable scroll path
        stage2Progress = Math.min(Math.max((progress - 0.16) / 0.72, 0), 1);
      }

      // Render the active project stage
      renderActiveStage2(state.activeProject, stage2Opacity, stage2Scale, stage2Progress);
    }
    // ------------------------------------------------------------------------
    // STAGE 3: Physical Remote (ONLY for Clock project, 0.42 to 0.70)
    // ------------------------------------------------------------------------
    else if (state.activeProject === 'clock' && progress <= 0.70) {
      // Text: Hidden
      heroTextContainer.style.opacity = '0';
      heroTextContainer.style.visibility = 'hidden';
      heroTextContainer.style.pointerEvents = 'none';

      // Stage 2: Hidden
      hideAllStage2Layers();

      // Remote: Only It in Center!
      let remoteOpacity = 1;
      let remoteScale = 1.0;
      let remoteY = 0;

      if (progress < 0.50) {
        const pIn = (progress - 0.42) / 0.08;
        const easeIn = pIn * pIn * (3 - 2 * pIn);
        remoteOpacity = easeIn;
        remoteScale = 0.68 + (0.32 * easeIn);
        remoteY = (1 - easeIn) * 140;
      } else if (progress > 0.63) {
        const pOut = (progress - 0.63) / 0.07;
        const easeOut = pOut * pOut * (3 - 2 * pOut);
        remoteOpacity = 1 - easeOut;
        remoteScale = 1.0 - (0.32 * easeOut);
        remoteY = -easeOut * 80;
      }

      remoteOverlayLayer.style.visibility = remoteOpacity > 0.01 ? 'visible' : 'hidden';
      remoteOverlayLayer.style.opacity = remoteOpacity.toFixed(3);
      remoteOverlayLayer.style.transform = `translate(-50%, calc(-50% + ${remoteY.toFixed(1)}px)) scale(${remoteScale.toFixed(3)})`;
      remoteOverlayLayer.style.pointerEvents = remoteOpacity > 0.5 ? 'auto' : 'none';

      if (remoteOpacity >= 0.6) {
        remoteOverlayLayer.classList.add('active-interact');
      } else {
        remoteOverlayLayer.classList.remove('active-interact');
      }

      // TV: Hidden
      tvOverlayLayer.style.opacity = '0';
      tvOverlayLayer.style.visibility = 'hidden';
      tvOverlayLayer.style.pointerEvents = 'none';
      tvOverlayLayer.style.transform = 'translate(-50%, calc(-50% + 220px)) scale(0.68)';
      tvOverlayLayer.classList.remove('active-interact');
    }
    // ------------------------------------------------------------------------
    // STAGE 4: Retro TV choice selector (ONLY for Clock project, 0.70 to 1.00)
    // ------------------------------------------------------------------------
    else if (state.activeProject === 'clock') {
      // Text: Hidden
      heroTextContainer.style.opacity = '0';
      heroTextContainer.style.visibility = 'hidden';
      heroTextContainer.style.pointerEvents = 'none';

      // Stage 2: Hidden
      hideAllStage2Layers();

      // Remote: Hidden
      remoteOverlayLayer.style.opacity = '0';
      remoteOverlayLayer.style.visibility = 'hidden';
      remoteOverlayLayer.style.pointerEvents = 'none';
      remoteOverlayLayer.style.transform = 'translate(-50%, calc(-50% - 80px)) scale(0.68)';
      remoteOverlayLayer.classList.remove('active-interact');

      // Scrapped TV: Only It in Center!
      let tvOpacity = 1;
      let tvScale = 1.0;
      let tvY = 0;

      if (progress < 0.78) {
        const pIn = (progress - 0.70) / 0.08;
        const easeIn = pIn * pIn * (3 - 2 * pIn);
        tvOpacity = easeIn;
        tvScale = 0.70 + (0.30 * easeIn);
        tvY = (1 - easeIn) * 160;
      }

      tvOverlayLayer.style.visibility = tvOpacity > 0.01 ? 'visible' : 'hidden';
      tvOverlayLayer.style.opacity = tvOpacity.toFixed(3);
      tvOverlayLayer.style.transform = `translate(-50%, calc(-50% + ${tvY.toFixed(1)}px)) scale(${tvScale.toFixed(3)})`;
      tvOverlayLayer.style.pointerEvents = tvOpacity > 0.5 ? 'auto' : 'none';

      if (tvOpacity >= 0.6) {
        tvOverlayLayer.classList.add('active-interact');
      } else {
        tvOverlayLayer.classList.remove('active-interact');
      }
    } else {
      // Catch-all safety for Violin / Torch past 0.98
      hideAllStage2Layers();
      tvOverlayLayer.style.opacity = '0';
      tvOverlayLayer.style.visibility = 'hidden';
      tvOverlayLayer.style.pointerEvents = 'none';
      remoteOverlayLayer.style.opacity = '0';
      remoteOverlayLayer.style.visibility = 'hidden';
      remoteOverlayLayer.style.pointerEvents = 'none';
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
      window.scrollTo({ top: maxScroll * 0.28, behavior: 'smooth' });
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
    updateSoundIcon(state.soundEnabled);
    triggerIrFlash();
    if (state.soundEnabled) playRemoteClickSound();
  }

  function updateSoundIcon(enabled) {
    if (!soundIcon) return;
    if (enabled) {
      soundIcon.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>';
    } else {
      soundIcon.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>';
    }
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
      if (voiceBannerTranscript) voiceBannerTranscript.textContent = 'Allow microphone in browser address bar (lock icon), or type country name below:';
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
          if (voiceBannerTranscript) voiceBannerTranscript.textContent = 'Allow microphone in browser address bar (lock icon), or type country name below:';
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

  // ==========================================================================
  // Parallel Trio Switcher in Stage 1 Starting Animation
  // ==========================================================================
  const tabClockBtn = document.getElementById('tabClockBtn');
  const tabViolinBtn = document.getElementById('tabViolinBtn');
  const tabTorchBtn = document.getElementById('tabTorchBtn');
  const panelClock = document.getElementById('panelClock');
  const panelViolin = document.getElementById('panelViolin');
  const panelTorch = document.getElementById('panelTorch');

  const tabButtons = [tabClockBtn, tabViolinBtn, tabTorchBtn].filter(Boolean);
  const panelElements = {
    clock: panelClock,
    violin: panelViolin,
    torch: panelTorch
  };

  let heroTrioIndex = 0;
  const heroTrioKeys = ['clock', 'violin', 'torch'];
  let heroTrioTimer = null;
  let userInteractedWithTabs = false;

  function switchHeroParallelTab(targetKey, isManual = false) {
    if (isManual) {
      userInteractedWithTabs = true;
      if (heroTrioTimer) clearInterval(heroTrioTimer);
    }

    state.activeProject = targetKey;

    tabButtons.forEach(btn => {
      const isTarget = btn.getAttribute('data-target') === targetKey;
      btn.classList.toggle('active', isTarget);
      btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
    });

    Object.keys(panelElements).forEach(k => {
      const panel = panelElements[k];
      if (panel) {
        if (k === targetKey) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      }
    });

    if (scrollCta) {
      const ctaLabels = {
        clock: 'scroll to clock',
        violin: 'scroll to violin',
        torch: 'scroll to rgb light'
      };
      const labelSpan = scrollCta.querySelector('span');
      if (labelSpan) {
        labelSpan.textContent = ctaLabels[targetKey] || 'scroll down';
      }
    }

    heroTrioIndex = heroTrioKeys.indexOf(targetKey);
    onScroll(); // Re-render Stage 2 immediately if scrolled down
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      playRemoteClickSound();
      switchHeroParallelTab(target, true);
    });
  });

  // Soft auto-cycle tabs every 6 seconds if user hasn't manually selected one and is at the top of the page
  heroTrioTimer = setInterval(() => {
    if (userInteractedWithTabs) return;
    const scrollPos = window.scrollY || window.pageYOffset;
    if (scrollPos < 100) {
      heroTrioIndex = (heroTrioIndex + 1) % heroTrioKeys.length;
      switchHeroParallelTab(heroTrioKeys[heroTrioIndex], false);
    }
  }, 6000);

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

  // ==========================================================================
  // Dynamic Project Links Renderer (Reads from localStorage scraphack_custom_links)
  // ==========================================================================
  const LINKS_STORAGE_KEY = 'scraphack_custom_links';
  const DEFAULT_PROJECT_LINKS = [
    {
      id: 'default-clock-repo',
      title: 'Clock GitHub Repository',
      url: 'https://github.com/nvaneed/scrap_hackthon',
      category: 'clock',
      description: 'samayam ethrayai: firmware and web socket control for the quartz clock.'
    },
    {
      id: 'default-violin-repo',
      title: 'Absolute Violin Repository',
      url: 'https://github.com/Lunarmist-byte/absoluteviolin',
      category: 'violin',
      description: 'Salvaged rack and pinion gear paired with a rotary potentiometer.'
    },
    {
      id: 'default-torch-repo',
      title: 'Absolute Torch Firmware',
      url: 'https://github.com/christy-basil-anil/absolute-torch/blob/main/absolute_torch.ino',
      category: 'torch',
      description: 'ESP32 captive portal and rainbow RGB lighting code.'
    },
    {
      id: 'default-tinkerhub',
      title: 'TinkerHub Foundation',
      url: 'https://tinkerhub.org',
      category: 'general',
      description: 'Official TinkerHub website and maker community.'
    }
  ];

  function renderProjectLinks() {
    const grid = document.getElementById('projectLinksGrid');
    if (!grid) return;

    let links = DEFAULT_PROJECT_LINKS;
    try {
      const raw = localStorage.getItem(LINKS_STORAGE_KEY);
      if (raw) {
        links = JSON.parse(raw);
      } else {
        localStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify(DEFAULT_PROJECT_LINKS));
      }
    } catch (e) {
      links = DEFAULT_PROJECT_LINKS;
    }

    if (!links || links.length === 0) {
      grid.innerHTML = '<div class="no-links-msg">No links added yet.</div>';
      return;
    }

    grid.innerHTML = links.map(link => {
      const cat = (link.category || 'general').toLowerCase();
      let badgeLabel = 'PROJECT';
      if (cat === 'clock') badgeLabel = 'CLOCK';
      else if (cat === 'violin') badgeLabel = 'VIOLIN';
      else if (cat === 'torch') badgeLabel = 'RGB TORCH';
      else badgeLabel = 'GENERAL';

      return `
        <a href="${escapeHtmlStr(link.url)}" target="_blank" rel="noopener noreferrer" class="link-card link-cat-${cat}">
          <div class="link-card-header">
            <span class="link-badge badge-${cat}">${badgeLabel}</span>
            <span class="link-external-icon">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </span>
          </div>
          <h3 class="link-card-title">${escapeHtmlStr(link.title)}</h3>
          ${link.description ? `<p class="link-card-desc">${escapeHtmlStr(link.description)}</p>` : ''}
          <div class="link-card-url">${escapeHtmlStr(link.url.replace(/^https?:\/\//, ''))}</div>
        </a>
      `;
    }).join('');
  }

  function escapeHtmlStr(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, (m) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m]));
  }

  // Render on load
  renderProjectLinks();

  // Listen to storage changes in case admin updates links in another tab
  window.addEventListener('storage', (e) => {
    if (e.key === LINKS_STORAGE_KEY) {
      renderProjectLinks();
    }
  });

})();
