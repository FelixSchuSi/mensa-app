import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';

precacheAndRoute(self.__WB_MANIFEST);
console.log('⚙️ Service Worker attached! ', self.__WB_MANIFEST);

// then.addEventListener('activate', function (event) {
//   var cacheWhitelist = ['v2'];

//   event.waitUntil(
//     caches.forEach(function (cache, cacheName) {
//       if (cacheWhitelist.indexOf(cacheName) == -1) {
//         return caches.delete(cacheName);
//       }
//     })
//   );
// });
