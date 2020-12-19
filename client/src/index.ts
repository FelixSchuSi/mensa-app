import { defineCustomElements } from '@ionic/core/loader';
defineCustomElements(window);
import './index.scss';

import './pages/app.component';
import './pages/sign-in/sign-in.page';
import './pages/sign-up/sign-up.page';
import './pages/tasks/tasks.page';
import './pages/settings/settings.page';
import './pages/meals-future/meals-future.page';
import './pages/meals-today/meals-today.page';
import './pages/groups/groups.page';

import './widgets/notification/notification.widget';
import './widgets/task/task.widget';
import './widgets/connection-status-bar/connection-status-bar.widget';
import './widgets/tab-container/tab-container.component';
import './widgets/chip-select/chip-select.widget';
import './widgets/chip-toggle-show-more/chip-toggle-show-more';
