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
import './pages/create-group/create-group.page';
import './pages/group-details/group-details.page';
import './pages/meal-detail/meal-detail.page';
import './pages/intro/intro.page';

import './widgets/task/task.widget';
import './widgets/connection-status-bar/connection-status-bar.widget';
import './widgets/chip-select/chip-select.widget';
import './widgets/filter-modal/filter-modal.widget';
import './widgets/chip-toggle-show-more/chip-toggle-show-more';
import './widgets/meal/meal.widget';

import './../node_modules/macro-carousel/dist/macro-carousel.min.js';
import './widgets/group-join-modal/group-join-modal.widget';
