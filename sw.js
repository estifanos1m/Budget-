self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});
self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
