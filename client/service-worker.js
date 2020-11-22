import { BackgroundSyncPlugin } from 'workbox-background-sync';
import { NetworkOnly } from 'workbox-strategies/NetworkOnly';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { registerRoute } from 'workbox-routing/registerRoute';

console.log('⚙️ Service Worker attached!');

self.addEventListener('sync', function (event) {
  console.log('♻ synching ...');
});

precacheAndRoute(self.__WB_MANIFEST);

const bgSyncPlugin = new BackgroundSyncPlugin('offline-queue', {
  maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

// TODO: how do you deal with replayed requests???

registerRoute(
  /https\:\/\/mensa-app-5jrmv\.ondigitalocean\.app\/api/,
  new NetworkOnly({
    // If NetworkFirst was used instead, cached responses would be used.
    plugins: [bgSyncPlugin]
  }),
  'POST'
);

registerRoute(
  /https\:\/\/mensa-app-5jrmv\.ondigitalocean\.app\/api/,
  new NetworkOnly({
    // If NetworkFirst was used instead, cached responses would be used.
    plugins: [bgSyncPlugin]
  }) // When no http method is passed 'GET' is implied
);
