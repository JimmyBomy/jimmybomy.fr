/* BomyOS service worker — HTML réseau d'abord, assets cache d'abord */
const CACHE = "bomyos-v10";
const CORE = ["/", "/assets/css/bomyos.css", "/assets/js/bomyos.js", "/apple-touch-icon.png", "/icon-192.png", "/icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)));
  self.skipWaiting();
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  // pages : réseau d'abord (toujours frais), cache en secours (hors-ligne)
  if (e.request.mode === "navigate") {
    e.respondWith(
      fetch(e.request).then(r => {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put("/", copy));
        return r;
      }).catch(() => caches.match("/"))
    );
    return;
  }
  // assets : cache d'abord, réseau en secours
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(r => {
      const copy = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return r;
    }))
  );
});
