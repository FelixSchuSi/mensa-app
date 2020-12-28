import { mainModule } from 'process';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
// import { storeService } from './src/services/store.service';

// self.addEventListener('install', async () => {
//   const newVersion = '1';
//   const oldVersion = await storeService.get('_sw_version');
//   console.log(`new Version: ${newVersion} old Version: ${oldVersion}`);
//   if (oldVersion === null) await storeService.set('_sw_version', newVersion);
//   if (Number(newVersion) !== Number(oldVersion)) {
//     console.log('New SW Version found - clearing network cache.');
//     caches.keys().then(cacheNames => {
//       cacheNames.forEach(cacheName => {
//         caches.delete(cacheName);
//       });
//     });
//     await storeService.set('_sw_version', newVersion);
//   }
// });

precacheAndRoute(self.__WB_MANIFEST);
console.log('⚙️ Service Worker attached! ');
