import { defineCustomElements } from '@ionic/core/loader';
defineCustomElements(window);
import './index.scss';
import './pages/app.component.ts';
import './pages/sign-in/sign-in.page.ts';
import './pages/sign-up/sign-up.page.ts';
import './widgets/notification/notification.widget.ts';
import './pages/sign-out/sign-out.page.ts';
import './pages/tasks/tasks.page.ts';
import './widgets/task/task.widget.ts';
import './widgets/connection-status-bar/connection-status-bar.widget';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').then(console.log).catch(console.error);
    navigator.serviceWorker.addEventListener('message', handleMessageFromWorker);
  });
}
function handleMessageFromWorker(msg: any) {
  console.log('incoming message from worker, msg:', msg);
  // switch (msg.data.type) {
  // }
}
