/**
 * Scraphack 2026 — Photo Admin & Media Manager Logic
 * Manages photo file uploads, URL inputs, live standardized previews,
 * and persistent storage via PhotoStore (IndexedDB).
 */

(function () {
  'use strict';

  // DOM Elements
  const photoUploadForm = document.getElementById('photoUploadForm');
  const sceneSelector = document.getElementById('sceneSelector');
  const fileDropzone = document.getElementById('fileDropzone');
  const photoFileInput = document.getElementById('photoFileInput');
  const photoUrlInput = document.getElementById('photoUrlInput');
  const photoTitleInput = document.getElementById('photoTitleInput');
  const photoCaptionInput = document.getElementById('photoCaptionInput');
  const submitPhotoBtn = document.getElementById('submitPhotoBtn');
  const formStatusMsg = document.getElementById('formStatusMsg');

  // Preview elements
  const previewEmptyState = document.getElementById('previewEmptyState');
  const previewImg = document.getElementById('previewImg');
  const previewCaptionBar = document.getElementById('previewCaptionBar');
  const previewCaptionTag = document.getElementById('previewCaptionTag');
  const previewCaptionText = document.getElementById('previewCaptionText');
  const previewTargetPlacement = document.getElementById('previewTargetPlacement');

  // Saved photos elements
  const photoCountBadge = document.getElementById('photoCountBadge');
  const photosGrid = document.getElementById('photosGrid');
  const photosEmptyState = document.getElementById('photosEmptyState');
  const exportJsonBtn = document.getElementById('exportJsonBtn');
  const importJsonInput = document.getElementById('importJsonInput');
  const clearAllBtn = document.getElementById('clearAllBtn');

  // Current active candidate image (DataURL or URL)
  let currentCandidateDataUrl = null;

  // Scene labels mapping
  const SCENE_NAMES = {
    'scene-1': 'Scene 01 · Origin',
    'scene-2': 'Scene 02 · Strategy',
    'scene-3': 'Scene 03 · Blueprint',
    'scene-4': 'Scene 04 · Day One',
    'scene-5': 'Scene 05 · The Scrap Hunt',
    'scene-6': 'Scene 06 · Execution',
    'scene-7': 'Scene 07 · The Struggle',
    'scene-8': 'Scene 08 · Side Quests',
    'scene-9': 'Scene 09 · Relief',
    'scene-10': 'Scene 10 · The Miracle Fix'
  };

  // ==========================================================================
  // Image Compression / Standardization Helper
  // Ensures images are optimized to max 1920x1080 for lightning fast carousels
  // ==========================================================================
  function optimizeImageDataUrl(rawUrl, maxDim = 1920, quality = 0.88) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const optimizedUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(optimizedUrl);
      };
      img.onerror = () => {
        // Fall back to raw URL if cross-origin or canvas failure
        resolve(rawUrl);
      };
      img.src = rawUrl;
    });
  }

  // ==========================================================================
  // Update Live Standardized 16:9 Preview
  // ==========================================================================
  function updatePreview() {
    const selectedScene = sceneSelector.value;
    const sceneLabel = SCENE_NAMES[selectedScene] || selectedScene;
    const caption = (photoCaptionInput.value || photoTitleInput.value || '').trim();

    if (previewTargetPlacement) {
      previewTargetPlacement.textContent = sceneLabel;
    }

    if (currentCandidateDataUrl) {
      if (previewEmptyState) previewEmptyState.style.display = 'none';
      if (previewImg) {
        previewImg.style.display = 'block';
        previewImg.src = currentCandidateDataUrl;
      }

      if (previewCaptionBar) {
        previewCaptionBar.style.display = 'flex';
        if (previewCaptionTag) {
          previewCaptionTag.textContent = selectedScene.replace('-', ' ').toUpperCase();
        }
        if (previewCaptionText) {
          previewCaptionText.textContent = caption || 'No caption entered yet...';
        }
      }

      if (submitPhotoBtn) submitPhotoBtn.disabled = false;
    } else {
      if (previewEmptyState) previewEmptyState.style.display = 'flex';
      if (previewImg) previewImg.style.display = 'none';
      if (previewCaptionBar) previewCaptionBar.style.display = 'none';
      if (submitPhotoBtn) submitPhotoBtn.disabled = true;
    }
  }

  // ==========================================================================
  // Handle File Upload & Drag/Drop
  // ==========================================================================
  async function handleFileSelect(file) {
    if (!file || !file.type.startsWith('image/')) {
      showStatus('Please select a valid image file (PNG, JPG, WEBP).', 'error');
      return;
    }

    showStatus('Processing and standardizing image...', 'normal');

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const rawDataUrl = e.target.result;
        currentCandidateDataUrl = await optimizeImageDataUrl(rawDataUrl);
        if (photoUrlInput) photoUrlInput.value = '';
        showStatus('Image loaded! Check preview and click Add Photo.', 'success');
        updatePreview();
      } catch (err) {
        console.error(err);
        showStatus('Failed to process image.', 'error');
      }
    };
    reader.onerror = () => {
      showStatus('Failed to read image file.', 'error');
    };
    reader.readAsDataURL(file);
  }

  if (photoFileInput) {
    photoFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) handleFileSelect(file);
    });
  }

  if (fileDropzone) {
    ['dragenter', 'dragover'].forEach(name => {
      fileDropzone.addEventListener(name, (e) => {
        e.preventDefault();
        e.stopPropagation();
        fileDropzone.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach(name => {
      fileDropzone.addEventListener(name, (e) => {
        e.preventDefault();
        e.stopPropagation();
        fileDropzone.classList.remove('dragover');
      });
    });

    fileDropzone.addEventListener('drop', (e) => {
      const file = e.dataTransfer.files[0];
      if (file) handleFileSelect(file);
    });
  }

  // URL Input Handler
  if (photoUrlInput) {
    photoUrlInput.addEventListener('input', () => {
      const url = photoUrlInput.value.trim();
      if (url) {
        currentCandidateDataUrl = url;
        if (photoFileInput) photoFileInput.value = '';
        showStatus('Image URL loaded.', 'success');
        updatePreview();
      } else {
        currentCandidateDataUrl = null;
        updatePreview();
      }
    });
  }

  // Form input listeners for live caption updates
  if (sceneSelector) sceneSelector.addEventListener('change', updatePreview);
  if (photoTitleInput) photoTitleInput.addEventListener('input', updatePreview);
  if (photoCaptionInput) photoCaptionInput.addEventListener('input', updatePreview);

  // Status message helper
  function showStatus(msg, type = 'normal') {
    if (!formStatusMsg) return;
    formStatusMsg.textContent = msg;
    formStatusMsg.className = 'form-status ' + type;
  }

  // ==========================================================================
  // Form Submit Handler
  // ==========================================================================
  if (photoUploadForm) {
    photoUploadForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!currentCandidateDataUrl) {
        showStatus('Please select an image first.', 'error');
        return;
      }

      const photoData = {
        dataUrl: currentCandidateDataUrl,
        title: photoTitleInput.value.trim(),
        caption: photoCaptionInput.value.trim(),
        sceneId: sceneSelector.value
      };

      try {
        submitPhotoBtn.disabled = true;
        showStatus('Saving photo to persistent storage...', 'normal');

        await PhotoStore.addPhoto(photoData);

        showStatus('Photo added successfully to story carousel!', 'success');

        // Reset inputs
        photoFileInput.value = '';
        photoUrlInput.value = '';
        photoTitleInput.value = '';
        photoCaptionInput.value = '';
        currentCandidateDataUrl = null;
        updatePreview();

        // Refresh saved photos list
        await loadSavedPhotos();

        setTimeout(() => {
          showStatus('', 'normal');
        }, 3000);
      } catch (err) {
        console.error('Failed to save photo:', err);
        showStatus('Error saving photo: ' + err.message, 'error');
        submitPhotoBtn.disabled = false;
      }
    });
  }

  // ==========================================================================
  // Load and Render Saved Photos List
  // ==========================================================================
  async function loadSavedPhotos() {
    try {
      const photos = await PhotoStore.getAllPhotos();
      
      if (photoCountBadge) {
        photoCountBadge.textContent = `${photos.length} Photo${photos.length === 1 ? '' : 's'}`;
      }

      if (!photosGrid) return;

      if (photos.length === 0) {
        photosGrid.innerHTML = '';
        if (photosEmptyState) photosEmptyState.style.display = 'block';
        return;
      }

      if (photosEmptyState) photosEmptyState.style.display = 'none';

      photosGrid.innerHTML = photos.map(photo => {
        const sceneLabel = SCENE_NAMES[photo.sceneId] || photo.sceneId;
        const dateStr = new Date(photo.createdAt).toLocaleDateString(undefined, {
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });

        return `
          <div class="photo-item-card" data-id="${photo.id}">
            <div class="photo-item-media">
              <img src="${photo.dataUrl}" class="photo-item-img" alt="${photo.title || 'Story photo'}" loading="lazy">
              <span class="photo-item-tag">${photo.sceneId.replace('-', ' ').toUpperCase()}</span>
            </div>
            <div class="photo-item-body">
              <h4 class="photo-item-title">${photo.title || sceneLabel}</h4>
              <p class="photo-item-caption">${photo.caption || 'No caption added.'}</p>
              <div class="photo-item-footer">
                <span class="photo-item-date">${dateStr}</span>
                <button type="button" class="photo-delete-btn" data-delete-id="${photo.id}" title="Delete Photo">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('');

      // Wire delete buttons
      const deleteBtns = photosGrid.querySelectorAll('[data-delete-id]');
      deleteBtns.forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const id = btn.getAttribute('data-delete-id');
          if (confirm('Are you sure you want to delete this photo from the story?')) {
            await PhotoStore.deletePhoto(id);
            await loadSavedPhotos();
          }
        });
      });

    } catch (e) {
      console.error('Failed to load photos:', e);
    }
  }

  // ==========================================================================
  // Backup & Restore Handlers
  // ==========================================================================
  if (exportJsonBtn) {
    exportJsonBtn.addEventListener('click', async () => {
      try {
        const jsonStr = await PhotoStore.exportJSON();
        const blob = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `scraphack_story_photos_${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } catch (e) {
        alert('Export failed: ' + e.message);
      }
    });
  }

  if (importJsonInput) {
    importJsonInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = async (evt) => {
        try {
          await PhotoStore.importJSON(evt.target.result);
          await loadSavedPhotos();
          alert('Backup imported successfully!');
        } catch (err) {
          alert('Failed to import backup: ' + err.message);
        }
      };
      reader.readAsText(file);
    });
  }

  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', async () => {
      if (confirm('Warning: This will delete ALL stored story photos. Are you sure?')) {
        await PhotoStore.clearAll();
        await loadSavedPhotos();
      }
    });
  }

  // ==========================================================================
  // PASSWORD AUTHENTICATION GATEWAY
  // Password: scraphackspecialmention@0987654321
  // ==========================================================================
  const REQUIRED_ADMIN_PASS = 'scraphackspecialmention@0987654321';
  const AUTH_STORAGE_KEY = 'scraphack_admin_authenticated';

  const adminAuthOverlay = document.getElementById('adminAuthOverlay');
  const adminAuthForm = document.getElementById('adminAuthForm');
  const adminPasswordInput = document.getElementById('adminPasswordInput');
  const togglePasswordVisibilityBtn = document.getElementById('togglePasswordVisibilityBtn');
  const authErrorMsg = document.getElementById('authErrorMsg');
  const adminLogoutBtn = document.getElementById('adminLogoutBtn');
  const adminAuthBadge = document.getElementById('adminAuthBadge');

  function checkAuthStatus() {
    const isAuthed = sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true';
    if (!adminAuthOverlay) return;
    if (isAuthed) {
      adminAuthOverlay.classList.remove('active');
      adminAuthOverlay.style.display = 'none';
      if (adminAuthBadge) adminAuthBadge.textContent = 'ADMIN // AUTHENTICATED';
    } else {
      adminAuthOverlay.style.display = 'flex';
      adminAuthOverlay.classList.add('active');
      if (adminAuthBadge) adminAuthBadge.textContent = 'ADMIN // LOCKED';
      if (adminPasswordInput) {
        adminPasswordInput.value = '';
        setTimeout(() => adminPasswordInput.focus(), 100);
      }
    }
  }

  if (adminAuthForm) {
    adminAuthForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const entered = adminPasswordInput ? adminPasswordInput.value.trim() : '';
      if (entered === REQUIRED_ADMIN_PASS) {
        sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
        if (authErrorMsg) authErrorMsg.style.display = 'none';
        checkAuthStatus();
      } else {
        if (authErrorMsg) {
          authErrorMsg.textContent = 'Incorrect password. Access denied.';
          authErrorMsg.style.display = 'block';
        }
        if (adminPasswordInput) {
          adminPasswordInput.select();
        }
      }
    });
  }

  if (togglePasswordVisibilityBtn && adminPasswordInput) {
    togglePasswordVisibilityBtn.addEventListener('click', () => {
      const isPass = adminPasswordInput.getAttribute('type') === 'password';
      adminPasswordInput.setAttribute('type', isPass ? 'text' : 'password');
    });
  }

  if (adminLogoutBtn) {
    adminLogoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem(AUTH_STORAGE_KEY);
      checkAuthStatus();
    });
  }

  // ==========================================================================
  // CUSTOM PROJECT LINKS MANAGER
  // Persisted in localStorage: scraphack_custom_links
  // ==========================================================================
  const LINKS_STORAGE_KEY = 'scraphack_custom_links';
  const DEFAULT_PROJECT_LINKS = [
    {
      id: 'default-clock-repo',
      title: 'Clock GitHub Repository',
      url: 'https://github.com/nvaneed/scrap_hackthon',
      category: 'clock',
      description: 'Firmware and web control code for the quartz clock.'
    },
    {
      id: 'default-violin-repo',
      title: 'Absolute Violin Repository',
      url: 'https://github.com/Lunarmist-byte/absoluteviolin',
      category: 'violin',
      description: 'Potentiometer rack and pinion synth code.'
    },
    {
      id: 'default-torch-repo',
      title: 'Absolute Torch Repository',
      url: 'https://github.com/christy-basil-anil/absolute-torch',
      category: 'torch',
      description: 'Absolute Torch project repository.'
    },
    {
      id: 'default-samayamethrayi-repo',
      title: 'Main Site Repository',
      url: 'https://github.com/Lunarmist-byte/samayamethrayi',
      category: 'clock',
      description: 'Web project and clock interface repository.'
    },
    {
      id: 'default-insta-vlog-1',
      title: 'Whole Vlog',
      url: 'https://www.instagram.com/reel/De6-Be7stNJ/',
      category: 'general',
      description: 'Akri vlog from the scrap hunt.'
    },
    {
      id: 'default-insta-vlog-2',
      title: 'Swalpam Music Ayalo',
      url: 'https://www.instagram.com/reel/De9SWTEBSEf/',
      category: 'violin',
      description: 'Violin audio testing session.'
    },
    {
      id: 'default-insta-vlog-3',
      title: 'Ganna bushanan Neyatinkara Christy',
      url: 'https://www.instagram.com/reel/De_lyOjTQR2/',
      category: 'torch',
      description: 'Hardware building with Christy.'
    },
    {
      id: 'default-insta-vlog-4',
      title: 'Mazhavile Torch',
      url: 'https://www.instagram.com/reel/DfCGZNuztU9/',
      category: 'torch',
      description: 'Rainbow RGB smart torch demo.'
    }
  ];

  function getStoredLinks() {
    try {
      const raw = localStorage.getItem(LINKS_STORAGE_KEY);
      let list = [];
      if (!raw) {
        list = [...DEFAULT_PROJECT_LINKS];
      } else {
        list = JSON.parse(raw);
        if (!Array.isArray(list)) list = [...DEFAULT_PROJECT_LINKS];
      }

      // Remove any non-project/vlog links, .html links, firmware direct code link, and old placeholder reels
      const oldReelCodes = ['c8rm1y4sl6e', 'c41ox4oi_5x', 'c32sp4xl_8y', 'c29wq1_m77z'];
      list = list.filter(l => {
        const u = (l.url || '').toLowerCase();
        if (u.includes('.html')) return false;
        if (u.includes('absolute_torch.ino')) return false;
        if (u.includes('tinkerhub.org')) return false;
        if (u.includes('linkedin.com')) return false;
        if (u === 'https://github.com/lunarmist-byte' || u === 'https://github.com/lunarmist-byte/') return false;
        if (oldReelCodes.some(code => u.includes(code))) return false;
        return true;
      });

      // Merge any default links that aren't yet in the list by url
      const existingUrls = new Set(list.map(l => (l.url || '').trim()));
      let updated = false;
      DEFAULT_PROJECT_LINKS.forEach(dl => {
        if (!existingUrls.has(dl.url.trim())) {
          list.push(dl);
          existingUrls.add(dl.url.trim());
          updated = true;
        }
      });

      // Sync no-fluff captions to default items
      list.forEach(item => {
        const matchingDefault = DEFAULT_PROJECT_LINKS.find(dl => dl.url.trim() === (item.url || '').trim());
        if (matchingDefault) {
          item.title = matchingDefault.title;
          item.description = matchingDefault.description;
        }
      });

      localStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify(list));
      return list;
    } catch (e) {
      console.warn('Could not read custom links, returning defaults', e);
      return DEFAULT_PROJECT_LINKS;
    }
  }

  function saveStoredLinks(links) {
    localStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify(links));
    renderLinksList();
  }

  const addLinkForm = document.getElementById('addLinkForm');
  const linkTitleInput = document.getElementById('linkTitleInput');
  const linkUrlInput = document.getElementById('linkUrlInput');
  const linkCategoryInput = document.getElementById('linkCategoryInput');
  const linkDescInput = document.getElementById('linkDescInput');
  const linkStatusMsg = document.getElementById('linkStatusMsg');
  const linksAdminList = document.getElementById('linksAdminList');
  const linksCountBadge = document.getElementById('linksCountBadge');

  function renderLinksList() {
    if (!linksAdminList) return;
    const links = getStoredLinks();
    if (linksCountBadge) {
      linksCountBadge.textContent = `${links.length} Link${links.length === 1 ? '' : 's'}`;
    }

    if (links.length === 0) {
      linksAdminList.innerHTML = '<div class="links-empty-notice">No custom links saved yet. Add one above!</div>';
      return;
    }

    linksAdminList.innerHTML = links.map((link) => `
      <div class="link-admin-item" data-id="${link.id}">
        <div class="link-item-left">
          <div class="link-item-meta">
            <span class="link-cat-badge cat-${link.category || 'general'}">${(link.category || 'general').toUpperCase()}</span>
            <span class="link-item-title">${escapeHtml(link.title)}</span>
          </div>
          <a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer" class="link-item-url">
            ${escapeHtml(link.url)}
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
          ${link.description ? `<p class="link-item-desc">${escapeHtml(link.description)}</p>` : ''}
        </div>
        <div class="link-item-actions">
          <button type="button" class="link-delete-btn" data-delete-id="${link.id}" title="Delete link">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            <span>Delete</span>
          </button>
        </div>
      </div>
    `).join('');

    // Attach delete listeners
    linksAdminList.querySelectorAll('[data-delete-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idToDelete = btn.getAttribute('data-delete-id');
        if (confirm('Delete this link from the website?')) {
          const current = getStoredLinks();
          const updated = current.filter(l => l.id !== idToDelete);
          saveStoredLinks(updated);
        }
      });
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, (m) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m]));
  }

  if (addLinkForm) {
    addLinkForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = linkTitleInput ? linkTitleInput.value.trim() : '';
      const url = linkUrlInput ? linkUrlInput.value.trim() : '';
      const category = linkCategoryInput ? linkCategoryInput.value : 'general';
      const description = linkDescInput ? linkDescInput.value.trim() : '';

      if (!title || !url) return;

      const newLink = {
        id: 'link_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
        title,
        url,
        category,
        description
      };

      const existing = getStoredLinks();
      existing.unshift(newLink);
      saveStoredLinks(existing);

      // Reset form
      addLinkForm.reset();
      if (linkStatusMsg) {
        linkStatusMsg.textContent = 'Link added successfully!';
        linkStatusMsg.className = 'status-msg success';
        linkStatusMsg.style.display = 'block';
        setTimeout(() => { linkStatusMsg.style.display = 'none'; }, 3000);
      }
    });
  }

  // ==========================================================================
  // INSTAGRAM VLOGS & REELS MANAGER
  // Shared storage key with vlogs.js: scraphack_insta_vlogs_v1
  // ==========================================================================
  const VLOGS_STORAGE_KEY = 'scraphack_insta_vlogs_v1';
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

  // Instagram URL / Embed Helper for Admin
  function extractInstaCode(rawInput) {
    if (!rawInput) return null;
    const trimmed = rawInput.trim();
    const match = trimmed.match(/instagram\.com\/(p|reel|tv)\/([a-zA-Z0-9_-]+)/i);
    if (match && match[2]) {
      return {
        type: match[1].toLowerCase() === 'p' ? 'p' : 'reel',
        code: match[2],
        isReel: match[1].toLowerCase() !== 'p'
      };
    }
    const directMatch = trimmed.match(/^([a-zA-Z0-9_-]{8,15})$/);
    if (directMatch) {
      return { type: 'reel', code: directMatch[1], isReel: true };
    }
    return null;
  }

  function getCleanInstaUrl(code, isReel = true) {
    const type = isReel ? 'reel' : 'p';
    return `https://www.instagram.com/${type}/${code}/`;
  }

  function getStoredVlogs() {
    const vlogsMap = new Map();

    // 1. Prime map with canonical static defaults
    DEFAULT_VLOGS.forEach(dv => {
      const parsed = extractInstaCode(dv.url);
      const key = parsed ? parsed.code.toLowerCase() : dv.url.trim().toLowerCase();
      const cleanUrl = parsed ? getCleanInstaUrl(parsed.code, parsed.isReel) : dv.url.trim();
      vlogsMap.set(key, {
        ...dv,
        url: cleanUrl
      });
    });

    // 2. Merge stored user items without duplicating default reels
    try {
      const raw = localStorage.getItem(VLOGS_STORAGE_KEY);
      if (raw) {
        const stored = JSON.parse(raw);
        if (Array.isArray(stored)) {
          const oldReels = ['c8rm1y4sl6e', 'c41ox4oi_5x', 'c32sp4xl_8y', 'c29wq1_m77z'];
          
          stored.forEach(item => {
            if (!item || !item.url) return;
            const parsed = extractInstaCode(item.url);
            const key = parsed ? parsed.code.toLowerCase() : item.url.trim().toLowerCase();
            
            // Skip old removed placeholder reels
            if (oldReels.some(code => key.includes(code))) return;

            const cleanUrl = parsed ? getCleanInstaUrl(parsed.code, parsed.isReel) : item.url.trim();

            if (vlogsMap.has(key)) {
              const existing = vlogsMap.get(key);
              if (item.title && !existing.title) existing.title = item.title;
              if (item.creator && !existing.creator) existing.creator = item.creator;
            } else {
              vlogsMap.set(key, {
                ...item,
                url: cleanUrl
              });
            }
          });
        }
      }
    } catch (e) {
      console.warn('LocalStorage error reading vlogs in admin:', e);
    }

    const list = Array.from(vlogsMap.values());
    try {
      localStorage.setItem(VLOGS_STORAGE_KEY, JSON.stringify(list));
    } catch (e) {}
    return list;
  }

  function saveStoredVlogs(vlogs) {
    localStorage.setItem(VLOGS_STORAGE_KEY, JSON.stringify(vlogs));
    renderVlogsList();
  }

  const addVlogForm = document.getElementById('addVlogForm');
  const vlogUrlInput = document.getElementById('vlogUrlInput');
  const vlogTitleInput = document.getElementById('vlogTitleInput');
  const vlogCategoryInput = document.getElementById('vlogCategoryInput');
  const vlogCreatorInput = document.getElementById('vlogCreatorInput');
  const vlogStatusMsg = document.getElementById('vlogStatusMsg');
  const vlogsAdminList = document.getElementById('vlogsAdminList');
  const vlogsCountBadge = document.getElementById('vlogsCountBadge');

  function renderVlogsList() {
    if (!vlogsAdminList) return;
    const vlogs = getStoredVlogs();
    if (vlogsCountBadge) {
      vlogsCountBadge.textContent = `${vlogs.length} Reel${vlogs.length === 1 ? '' : 's'}`;
    }

    if (vlogs.length === 0) {
      vlogsAdminList.innerHTML = '<div class="links-empty-notice">No Instagram vlogs stored yet. Add one above!</div>';
      return;
    }

    vlogsAdminList.innerHTML = vlogs.map((vlog) => `
      <div class="link-admin-item" data-vlog-id="${vlog.id}">
        <div class="link-item-left">
          <div class="link-item-meta">
            <span class="link-item-title">${escapeHtml(vlog.title || 'Untitled Reel')}</span>
            ${vlog.creator ? `<span style="font-size: 0.76rem; color: var(--ink-muted);">${escapeHtml(vlog.creator)}</span>` : ''}
          </div>
          <a href="${escapeHtml(vlog.url)}" target="_blank" rel="noopener noreferrer" class="link-item-url">
            ${escapeHtml(vlog.url)}
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
        <div class="link-item-actions">
          <button type="button" class="link-delete-btn" data-delete-vlog-id="${vlog.id}" title="Delete vlog">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            <span>Delete</span>
          </button>
        </div>
      </div>
    `).join('');

    // Attach delete listeners
    vlogsAdminList.querySelectorAll('[data-delete-vlog-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idToDelete = btn.getAttribute('data-delete-vlog-id');
        if (confirm('Delete this Instagram reel from the public vlogs page?')) {
          const current = getStoredVlogs();
          const updated = current.filter(v => v.id !== idToDelete);
          saveStoredVlogs(updated);
        }
      });
    });
  }

  if (addVlogForm) {
    addVlogForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const rawUrl = vlogUrlInput ? vlogUrlInput.value.trim() : '';
      const title = vlogTitleInput ? vlogTitleInput.value.trim() : '';
      const creator = vlogCreatorInput ? vlogCreatorInput.value.trim() : '';

      if (!rawUrl) return;

      const newVlog = {
        id: 'vlog_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
        url: rawUrl,
        title: title || 'Scraphack 2026 Reel',
        creator,
        createdAt: Date.now()
      };

      const existing = getStoredVlogs();
      existing.unshift(newVlog);
      saveStoredVlogs(existing);

      addVlogForm.reset();
      if (vlogStatusMsg) {
        vlogStatusMsg.textContent = 'Instagram vlog added to public page!';
        vlogStatusMsg.className = 'status-msg success';
        vlogStatusMsg.style.display = 'block';
        setTimeout(() => { vlogStatusMsg.style.display = 'none'; }, 3000);
      }
    });
  }

  // ==========================================================================
  // Initialize on Load
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', async () => {
    // Check authentication first
    checkAuthStatus();

    // If targeted from a specific scene link (e.g. admin.html?scene=scene-1)
    const urlParams = new URLSearchParams(window.location.search);
    const targetScene = urlParams.get('scene');
    if (targetScene && sceneSelector) {
      sceneSelector.value = targetScene;
    }

    updatePreview();
    await loadSavedPhotos();
    renderLinksList();
    renderVlogsList();
  });

})();
