import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
const VERSION = '1.0.0';

precacheAndRoute(self.__WB_MANIFEST);
console.log('⚙️ Service Worker attached! ');

// self.addEventListener('activate', evt => {
//   console.log('In activate sw callback');
//   evt.waitUntil(
//     caches.keys().then(keys => {
//       console.log(keys);
//       return Promise.all(keys.filter(key => key !== VERSION).map(key => caches.delete(key)));
//     })
//   );
// });
