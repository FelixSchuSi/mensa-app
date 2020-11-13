import { defineCustomElements } from '@ionic/core/loader';
defineCustomElements(window).then(() => {
  /* Ionic is loaded! */
});

import './index.scss';
import './pages/app.component.ts';
import './pages/sign-in/sign-in.page.ts';
import './pages/sign-up/sign-up.page.ts';
import './widgets/header/header.widget.ts';
import './widgets/notification/notification.widget.ts';
import './pages/sign-out/sign-out.page.ts';
import './pages/tasks/tasks.page.ts';
import './widgets/task/task.widget.ts';
