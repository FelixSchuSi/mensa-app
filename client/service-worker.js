import { BackgroundSyncPlugin } from 'workbox-background-sync';
import { NetworkOnly } from 'workbox-strategies/NetworkOnly';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { registerRoute } from 'workbox-routing/registerRoute';

precacheAndRoute(self.__WB_MANIFEST);

console.log('⚙️ Service Worker attached!');

self.addEventListener('sync', function (event) {
  console.log('♻ synching ...');
});

const onSync = async callBackOptions => {
  const allClients = await self.clients.matchAll();
  try {
    await callBackOptions.queue.replayRequests();
    allClients.map(client => {
      console.log('sending succes msg to client: ', client);
      client.postMessage({ type: 'sync-success', content: {} });
    });
  } catch (e) {
    console.log('Error when syncing: ', e);
    if (allClients) {
      allClients.map(client => client.postMessage({ type: 'sync-failure', content: {} }));
    }
  }
};

const bgSyncPlugin = new BackgroundSyncPlugin('offline-queue', {
  maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
  onSync
});

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
