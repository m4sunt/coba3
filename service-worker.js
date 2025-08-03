self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('buku-tamu-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icon-192.png',
        './icon-512.png'
        // Tambahkan file CSS, JS, dan lainnya kalau ada
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
