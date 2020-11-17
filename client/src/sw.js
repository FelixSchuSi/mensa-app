import { Queue } from 'workbox-background-sync';
import { precacheAndRoute } from 'workbox-precaching';
// Your other import statements go here.

precacheAndRoute(self.__WB_MANIFEST);
// Your other SW code goes here.

const queue = new Queue('offlineQueue');

self.addEventListener('fetch', event => {
  // Clone the request to ensure it's safe to read when
  // adding to the Queue.
  console.log('fetch!: ', event);
  const promiseChain = fetch(event.request.clone()).catch(err => {
    console.log('qing!: ', event.request);
    return queue.pushRequest({ request: event.request });
  });

  event.waitUntil(promiseChain);
});
