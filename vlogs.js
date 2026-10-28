/**
 * Scraphack 2026 — Vlogs & Instagram Reels Controller
 * Manages Instagram embeds, local storage persistence, filtering, and live clocks.
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'scraphack_insta_vlogs_v1';

  // Static curated hackathon reels (Permanent)
  const DEFAULT_VLOGS = [
    {
      id: 'vlog_seed_1',
      url: 'https://www.instagram.com/reel/De6-Be7stNJ/',
      title: 'Whole Vlog',
      category: 'bts',
      creator: '',
      createdAt: 1793179522106
    },
    {
      id: 'vlog_seed_2',
      url: 'https://www.instagram.com/reel/De9SWTEBSEf/',
      title: 'Swalpam Music Ayalo',
      category: 'violin',
      creator: '',
      createdAt: 1793179573730
    },
    {
      id: 'vlog_seed_3',
      url: 'https://www.instagram.com/reel/De_lyOjTQR2/',
      title: 'Ganna bushanan Neyatinkara Christy',
      category: 'torch',
      creator: '',
      createdAt: 1793179600982
    },
    {
      id: 'vlog_seed_4',
      url: 'https://www.instagram.com/reel/DfCGZNuztU9/',
      title: 'Mazhavile Torch',
      category: 'torch',
      creator: '',
      createdAt: 1793179623504
    }
  ];

  // State
  let vlogsList = [];
  let currentFilter = 'all';

  // Elements
  const vlogsGrid = document.getElementById('vlogsGrid');
  const vlogsCountBadge = document.getElementById('vlogsCountBadge');
  const vlogsEmptyState = document.getElementById('vlogsEmptyState');
  const filterPillGroup = document.getElementById('filterPillGroup');
  const navLiveTime = document.getElementById('navLiveTime');

  // Modal Elements
  const embedModal = document.getElementById('embedModal');
  const openAddModalBtn = document.getElementById('openAddModalBtn');
  const quickAddBtn = document.getElementById('quickAddBtn');
  const emptyAddBtn = document.getElementById('emptyAddBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const cancelModalBtn = document.getElementById('cancelModalBtn');
  const embedForm = document.getElementById('embedForm');
  const instaUrlInput = document.getElementById('instaUrlInput');
  const reelTitleInput = document.getElementById('reelTitleInput');
  const reelCategorySelect = document.getElementById('reelCategorySelect');
  const reelCreatorInput = document.getElementById('reelCreatorInput');

  // --------------------------------------------------------------------------
  // Storage Helpers
  // --------------------------------------------------------------------------
  function loadVlogs() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        vlogsList = JSON.parse(raw);
        if (!Array.isArray(vlogsList)) vlogsList = [...DEFAULT_VLOGS];

        // Purge old seed placeholder reels
        const oldReels = ['c8rm1y4sl6e', 'c41ox4oi_5x', 'c32sp4xl_8y', 'c29wq1_m77z'];
        vlogsList = vlogsList.filter(v => !oldReels.some(code => (v.url || '').toLowerCase().includes(code)));

        // Deduplicate vlogs by URL to ensure each reel only appears once
        const seenUrls = new Set();
        vlogsList = vlogsList.filter(v => {
          const urlNorm = (v.url || '').trim().toLowerCase();
          if (seenUrls.has(urlNorm)) return false;
          seenUrls.add(urlNorm);
          return true;
        });

        // Merge default vlogs if missing
        DEFAULT_VLOGS.forEach(dv => {
          const dvUrlNorm = dv.url.trim().toLowerCase();
          if (!seenUrls.has(dvUrlNorm)) {
            vlogsList.push(dv);
            seenUrls.add(dvUrlNorm);
          }
        });

        // Sync default titles
        vlogsList.forEach(v => {
          const match = DEFAULT_VLOGS.find(dv => dv.url.trim().toLowerCase() === (v.url || '').trim().toLowerCase());
          if (match) {
            v.title = match.title;
            v.category = match.category;
          }
        });
        saveVlogs();
      } else {
        vlogsList = [...DEFAULT_VLOGS];
        saveVlogs();
      }
    } catch (e) {
      console.warn('LocalStorage error reading vlogs:', e);
      vlogsList = [...DEFAULT_VLOGS];
    }
  }

  function saveVlogs() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(vlogsList));
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }
  }

  // --------------------------------------------------------------------------
  // Instagram URL / Embed Helper
  // Extracts shortcode from /reel/SHORTCODE/ or /p/SHORTCODE/
  // --------------------------------------------------------------------------
  function extractInstaCode(rawInput) {
    if (!rawInput) return null;
    const trimmed = rawInput.trim();
    
    // Check if it's already an iframe or blockquote or full URL
    const match = trimmed.match(/instagram\.com\/(p|reel|tv)\/([a-zA-Z0-9_-]+)/i);
    if (match && match[2]) {
      return {
        type: match[1].toLowerCase() === 'p' ? 'p' : 'reel',
        code: match[2],
        isReel: match[1].toLowerCase() !== 'p'
      };
    }

    // Direct shortcode fallback
    const directMatch = trimmed.match(/^([a-zA-Z0-9_-]{8,15})$/);
    if (directMatch) {
      return {
        type: 'reel',
        code: directMatch[1],
        isReel: true
      };
    }

    return null;
  }

  function getCleanInstaUrl(code, isReel = true) {
    const type = isReel ? 'reel' : 'p';
    return `https://www.instagram.com/${type}/${code}/`;
  }

  function getInstaEmbedHtml(code, isReel = true) {
    const type = isReel ? 'reel' : 'p';
    return `<iframe 
      src="https://www.instagram.com/${type}/${code}/embed/" 
      class="instagram-media" 
      frameborder="0" 
      scrolling="no" 
      allowtransparency="true" 
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowfullscreen="true"
      loading="lazy"
      style="min-height: 540px; width: 100%; border: none; border-radius: 12px; background: #080c14;">
    </iframe>`;
  }

  // --------------------------------------------------------------------------
  // Render Vlogs
  // --------------------------------------------------------------------------
  function renderVlogs() {
    if (!vlogsGrid) return;

    const displayList = [...vlogsList];

    if (vlogsCountBadge) {
      vlogsCountBadge.textContent = `${displayList.length} Reel${displayList.length === 1 ? '' : 's'}`;
    }

    if (displayList.length === 0) {
      vlogsGrid.innerHTML = '';
      if (vlogsEmptyState) vlogsEmptyState.style.display = 'block';
      return;
    }

    if (vlogsEmptyState) vlogsEmptyState.style.display = 'none';

    vlogsGrid.innerHTML = displayList.map(vlog => {
      const parsed = extractInstaCode(vlog.url);
      const code = parsed ? parsed.code : null;
      const cleanUrl = code ? getCleanInstaUrl(code, parsed ? parsed.isReel : true) : vlog.url;

      return `
        <article class="vlog-card" data-id="${vlog.id}">
          <div class="vlog-card-header" style="justify-content: flex-end;">
            <button class="vlog-delete-btn" type="button" data-delete-id="${vlog.id}" title="Remove this vlog" aria-label="Remove vlog">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>

          <div class="vlog-embed-wrap">
            ${code ? getInstaEmbedHtml(code, parsed ? parsed.isReel : true) : `
              <div class="vlog-fallback-preview">
                <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path></svg>
                <span>Instagram Post / Reel</span>
                <a href="${cleanUrl}" target="_blank" rel="noopener noreferrer" class="vlog-fallback-btn">
                  Watch on Instagram &rarr;
                </a>
              </div>
            `}
          </div>

          <div class="vlog-info">
            <h3 class="vlog-card-title">${vlog.title || 'Reel'}</h3>
            <div class="vlog-card-meta">
              ${vlog.creator ? `<span>${vlog.creator}</span>` : ''}
              <a href="${cleanUrl}" target="_blank" rel="noopener noreferrer" class="vlog-insta-link" title="Open on Instagram">
                <span>View on Instagram</span>
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Trigger Instagram Embed processor if script exists
    if (window.instgrm && window.instgrm.Embeds) {
      try {
        window.instgrm.Embeds.process();
      } catch (e) {}
    }

    // Attach delete listeners
    vlogsGrid.querySelectorAll('.vlog-delete-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-delete-id');
        if (confirm('Are you sure you want to remove this Instagram vlog from the page?')) {
          deleteVlog(id);
        }
      });
    });
  }

  function deleteVlog(id) {
    vlogsList = vlogsList.filter(v => v.id !== id);
    saveVlogs();
    renderVlogs();
  }

  // --------------------------------------------------------------------------
  // Modal Actions
  // --------------------------------------------------------------------------
  function openModal() {
    if (!embedModal) return;
    embedModal.classList.add('open');
    embedModal.setAttribute('aria-hidden', 'false');
    if (instaUrlInput) instaUrlInput.focus();
  }

  function closeModal() {
    if (!embedModal) return;
    embedModal.classList.remove('open');
    embedModal.setAttribute('aria-hidden', 'true');
    if (embedForm) embedForm.reset();
  }

  if (openAddModalBtn) openAddModalBtn.addEventListener('click', openModal);
  if (quickAddBtn) quickAddBtn.addEventListener('click', openModal);
  if (emptyAddBtn) emptyAddBtn.addEventListener('click', openModal);
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (cancelModalBtn) cancelModalBtn.addEventListener('click', closeModal);

  if (embedModal) {
    embedModal.addEventListener('click', (e) => {
      if (e.target === embedModal) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && embedModal && embedModal.classList.contains('open')) {
      closeModal();
    }
  });

  // Handle Form Submission
  if (embedForm) {
    embedForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const rawUrl = instaUrlInput.value.trim();
      const parsed = extractInstaCode(rawUrl);

      if (!parsed) {
        alert('Please enter a valid Instagram reel or post link (e.g. https://www.instagram.com/reel/C8rM1y4SL6e/)');
        return;
      }

      const newVlog = {
        id: 'vlog_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
        url: getCleanInstaUrl(parsed.code, parsed.isReel),
        title: reelTitleInput.value.trim() || 'Scraphack Reel',
        category: reelCategorySelect.value || 'bts',
        creator: reelCreatorInput.value.trim() || '@tinkerhub',
        createdAt: Date.now()
      };

      vlogsList.unshift(newVlog);
      saveVlogs();
      renderVlogs();
      closeModal();
    });
  }

  // --------------------------------------------------------------------------
  // Filter Tabs
  // --------------------------------------------------------------------------
  if (filterPillGroup) {
    filterPillGroup.querySelectorAll('.filter-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        filterPillGroup.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter') || 'all';
        renderVlogs();
      });
    });
  }

  // --------------------------------------------------------------------------
  // Live Clock Pill
  // --------------------------------------------------------------------------
  function updateLiveClock() {
    if (!navLiveTime) return;
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const secs = String(now.getSeconds()).padStart(2, '0');
    navLiveTime.textContent = `${hrs}:${mins}:${secs}`;
  }

  setInterval(updateLiveClock, 1000);
  updateLiveClock();

  // Initialize
  loadVlogs();
  renderVlogs();

})();
