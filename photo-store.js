/**
 * Scraphack 2026 — Photo Store
 * Persistent storage using IndexedDB with localStorage fallback.
 * Allows adding, retrieving, deleting, exporting, and importing documentary photos.
 */

(function (window) {
  'use strict';

  const DB_NAME = 'ScraphackPhotoDB';
  const STORE_NAME = 'story_photos';
  const DB_VERSION = 1;
  const LOCAL_STORAGE_KEY = 'scraphack_story_photos_backup';

  let dbPromise = null;

  function initDB() {
    if (dbPromise) return dbPromise;

    dbPromise = new Promise((resolve, reject) => {
      if (!window.indexedDB) {
        console.warn('IndexedDB not supported, falling back to localStorage.');
        resolve(null);
        return;
      }

      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
          store.createIndex('sceneId', 'sceneId', { unique: false });
          store.createIndex('createdAt', 'createdAt', { unique: false });
        }
      };

      request.onsuccess = (event) => {
        resolve(event.target.result);
      };

      request.onerror = (event) => {
        console.error('IndexedDB open error:', event.target.error);
        resolve(null); // Fallback to localStorage
      };
    });

    return dbPromise;
  }

  // LocalStorage Fallback Helpers
  function getLocalStoragePhotos() {
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error('LocalStorage read error:', e);
      return [];
    }
  }

  function setLocalStoragePhotos(photos) {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(photos));
    } catch (e) {
      console.warn('LocalStorage write failed (quota exceeded or private browsing):', e);
    }
  }

  const PhotoStore = {
    // Get all photos sorted by createdAt (newest first or chronological)
    async getAllPhotos() {
      const db = await initDB();
      let rawList = [];

      if (!db) {
        rawList = getLocalStoragePhotos();
      } else {
        rawList = await new Promise((resolve) => {
          try {
            const tx = db.transaction(STORE_NAME, 'readonly');
            const store = tx.objectStore(STORE_NAME);
            const req = store.getAll();
            req.onsuccess = () => resolve(req.result || []);
            req.onerror = () => resolve(getLocalStoragePhotos());
          } catch (e) {
            resolve(getLocalStoragePhotos());
          }
        });
      }

      // Identify dummy/placeholder or unwanted photos:
      // - The sunset heart photo ("Snapped Clock Hand Superglue Fix" / "Resurrected clock hand")
      // - Scene 1 photo ("also remove the pic from scene 1")
      // - Global showcase photos with sceneId === 'all' ("remove the global showcase")
      const toDelete = [];
      const cleanList = [];

      for (const p of rawList) {
        const isSunsetPlaceholder = (p.title && p.title.toLowerCase().includes('superglue')) || 
                                   (p.caption && p.caption.toLowerCase().includes('resurrected clock hand'));
        const isScene1 = (p.sceneId === 'scene-1');
        const isGlobalAll = (p.sceneId === 'all');

        if (isSunsetPlaceholder || isScene1 || isGlobalAll) {
          toDelete.push(p.id);
        } else {
          cleanList.push(p);
        }
      }

      if (toDelete.length > 0) {
        if (db) {
          try {
            const tx = db.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            for (const id of toDelete) {
              store.delete(id);
            }
          } catch (e) {}
        }
        try {
          const currentLocal = getLocalStoragePhotos().filter(p => !toDelete.includes(p.id));
          setLocalStoragePhotos(currentLocal);
        } catch (e) {}
      }

      cleanList.sort((a, b) => a.createdAt - b.createdAt);
      return cleanList;
    },

    // Get photos for a specific scene ('all' or 'scene-1' ... 'scene-10')
    async getPhotosByScene(sceneId) {
      const all = await this.getAllPhotos();
      if (!sceneId || sceneId === 'all') {
        return all;
      }
      return all.filter(p => p.sceneId === sceneId || p.sceneId === 'all');
    },

    // Add a new photo: { dataUrl, caption, sceneId, title }
    async addPhoto({ dataUrl, caption, sceneId, title }) {
      const photo = {
        id: 'photo_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
        dataUrl,
        title: title || '',
        caption: caption || '',
        sceneId: sceneId || 'all',
        createdAt: Date.now()
      };

      const db = await initDB();
      if (db) {
        await new Promise((resolve, reject) => {
          try {
            const tx = db.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            const req = store.add(photo);
            req.onsuccess = () => resolve(photo);
            req.onerror = () => reject(req.error);
          } catch (e) {
            reject(e);
          }
        });
      }

      // Also mirror to localStorage as backup if size permits
      try {
        const localList = getLocalStoragePhotos();
        localList.push(photo);
        setLocalStoragePhotos(localList);
      } catch (e) {}

      return photo;
    },

    // Delete a photo by ID
    async deletePhoto(id) {
      const db = await initDB();
      if (db) {
        await new Promise((resolve, reject) => {
          try {
            const tx = db.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            const req = store.delete(id);
            req.onsuccess = () => resolve(true);
            req.onerror = () => reject(req.error);
          } catch (e) {
            reject(e);
          }
        });
      }

      // Update localStorage backup
      try {
        const localList = getLocalStoragePhotos().filter(p => p.id !== id);
        setLocalStoragePhotos(localList);
      } catch (e) {}

      return true;
    },

    // Delete all photos for a specific scene
    async deletePhotosByScene(sceneId) {
      const all = await this.getAllPhotos();
      const targets = all.filter(p => p.sceneId === sceneId);
      for (const p of targets) {
        await this.deletePhoto(p.id);
      }
      return targets.length;
    },

    // Clear all photos
    async clearAll() {
      const db = await initDB();
      if (db) {
        await new Promise((resolve) => {
          try {
            const tx = db.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            const req = store.clear();
            req.onsuccess = () => resolve(true);
            req.onerror = () => resolve(false);
          } catch (e) {
            resolve(false);
          }
        });
      }

      try {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      } catch (e) {}

      return true;
    },

    // Export all photos as JSON
    async exportJSON() {
      const photos = await this.getAllPhotos();
      return JSON.stringify(photos, null, 2);
    },

    // Import photos from JSON string
    async importJSON(jsonStr) {
      const list = JSON.parse(jsonStr);
      if (!Array.isArray(list)) throw new Error('Invalid JSON format: expected an array');

      for (const item of list) {
        if (item.dataUrl) {
          await this.addPhoto({
            dataUrl: item.dataUrl,
            title: item.title,
            caption: item.caption,
            sceneId: item.sceneId
          });
        }
      }
      return true;
    }
  };

  window.PhotoStore = PhotoStore;

})(window);
