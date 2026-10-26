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
  // Initialize on Load
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', async () => {
    // If targeted from a specific scene link (e.g. admin.html?scene=scene-1)
    const urlParams = new URLSearchParams(window.location.search);
    const targetScene = urlParams.get('scene');
    if (targetScene && sceneSelector) {
      sceneSelector.value = targetScene;
    }

    updatePreview();
    await loadSavedPhotos();
  });

})();
