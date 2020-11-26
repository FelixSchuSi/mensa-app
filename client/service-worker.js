import { BackgroundSyncPlugin } from 'workbox-background-sync';
import { NetworkOnly } from 'workbox-strategies/NetworkOnly';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { registerRoute } from 'workbox-routing/registerRoute';

precacheAndRoute(self.__WB_MANIFEST);

console.log('⚙️ Service Worker attached!');
