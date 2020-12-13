import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
const newVersion = '1';
const oldVersion = localStorage.getItem('_sw_version');
if (Number(newVersion) !== Number(oldVersion)) {
  console.log('New SW Version found - clearing network cache.');
  caches.keys().then(cacheNames => {
    cacheNames.forEach(cacheName => {
      caches.delete(cacheName);
    });
  });
  localStorage.setItem('_sw_version', newVersion);
}

precacheAndRoute(self.__WB_MANIFEST);
console.log('⚙️ Service Worker attached! ');
