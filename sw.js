// Service worker : met l'appli en cache pour qu'elle marche hors ligne.
// Change le numéro de version à chaque mise à jour des fichiers.
const CACHE = "sincere-v1";
const FICHIERS = ["./", "index.html", "data.js", "edu.js", "app.js", "manifest.json", "icon-192.png", "icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FICHIERS)));
  self.skipWaiting();
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((k) => Promise.all(k.filter((x) => x !== CACHE).map((x) => caches.delete(x)))));
  self.clients.claim();
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || !e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(
    fetch(e.request).then((r) => {
      const copie = r.clone();
      caches.open(CACHE).then((c) => c.put(e.request, copie));
      return r;
    }).catch(() => caches.match(e.request))
  );
});
