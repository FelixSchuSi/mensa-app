import { BackgroundSyncPlugin } from 'workbox-background-sync';
import { NetworkOnly } from 'workbox-strategies/NetworkOnly';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { registerRoute } from 'workbox-routing/registerRoute';

console.log('⚙️ Service Worker attached!');

self.addEventListener('sync', function (event) {
  console.log('online again 😎');
});

precacheAndRoute(self.__WB_MANIFEST);

const bgSyncPlugin = new BackgroundSyncPlugin('offline-queue', {
  maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

registerRoute(
  /https\:\/\/mensa-app-5jrmv\.ondigitalocean\.app\/api/,
  new NetworkOnly({
    // If NetworkFirst was used instead, cached responses would be used.
    plugins: [bgSyncPlugin]
  })
);
