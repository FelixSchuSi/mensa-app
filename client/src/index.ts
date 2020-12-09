import { defineCustomElements } from '@ionic/core/loader';
defineCustomElements(window);
import './index.scss';

import './pages/app.component';
import './pages/sign-in/sign-in.page';
import './pages/sign-up/sign-up.page';
import './pages/sign-out/sign-out.page';
import './pages/tasks/tasks.page';
import './pages/settings/settings.page';

import './widgets/notification/notification.widget.ts';
import './widgets/task/task.widget.ts';
import './widgets/connection-status-bar/connection-status-bar.widget';
import './widgets/tab-container/tab-container.component';
