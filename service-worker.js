// service-worker.js

self.addEventListener('install', event => {
  console.log('✅ Service Worker: Terpasang');
  self.skipWaiting(); // Langsung aktif setelah install
});

self.addEventListener('activate', event => {
  console.log('✅ Service Worker: Aktif');
});

self.addEventListener('fetch', event => {
  // Tidak cache atau override fetch — biarkan default
});
