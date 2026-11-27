/* BomyOS service worker : pages et fichiers non versionnés réseau d'abord, fichiers versionnés (?v=) cache d'abord */
const CACHE = "bomyos-v46";
const CORE = ["/", "/apple-touch-icon.png", "/icon-192.png", "/icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)));
  self.skipWaiting();
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});

const fromNetwork = req => fetch(req).then(r => {
  if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
  return r;
});

self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== location.origin) return;
  // admin et API : jamais interceptés
  if (url.pathname.startsWith("/admin") || url.pathname.startsWith("/api")) return;
  // pages légales et service worker : toujours le réseau
  if (/^\/(en\/)?(mentions-legales|confidentialite|legal-notice|privacy)/.test(url.pathname) || url.pathname === "/sw.js") return;
  // la page demande explicitement du frais : on la laisse passer
  if (req.cache === "no-store" || req.cache === "reload" || req.cache === "no-cache") return;
  // pages : réseau d'abord, copie de l'accueil en secours hors ligne
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then(r => {
      if (url.pathname === "/" && r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put("/", copy)); }
      return r;
    }).catch(() => caches.match("/")));
    return;
  }
  // fichier versionné (?v=) : son contenu ne change jamais, cache d'abord
  if (url.searchParams.has("v")) {
    e.respondWith(caches.match(req).then(hit => hit || fromNetwork(req)));
    return;
  }
  // tout le reste : réseau d'abord, cache seulement hors ligne
  e.respondWith(fromNetwork(req).catch(() => caches.match(req)));
});
