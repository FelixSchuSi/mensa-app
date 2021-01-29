import { defineCustomElements } from '@ionic/core/loader';
import * as pwaElements from '@ionic/pwa-elements/loader';
import { Plugins } from '@capacitor/core';

defineCustomElements(window);
pwaElements.defineCustomElements(window);

import './index.scss';

import './pages/app.component';
import './pages/sign-in/sign-in.page';
import './pages/sign-up/sign-up.page';
import './pages/tasks/tasks.page';
import './pages/settings/settings.page';
import './pages/meals-future/meals-future.page';
import './pages/meals-today/meals-today.page';
import './pages/groups/groups.page';
import './pages/group-details/group-details.page';
import './pages/meal-detail/meal-detail.page';
import './pages/intro/intro.page';

import './widgets/task/task.widget';
import './widgets/connection-status-bar/connection-status-bar.widget';
import './widgets/chip-select/chip-select.widget';
import './widgets/filter-modal/filter-modal.widget';
import './widgets/chip-toggle-show-more/chip-toggle-show-more';
import './widgets/meal/meal.widget';
import './widgets/meal-reviews/meal-reviews';
import './widgets/group-join-modal/group-join-modal.widget';
import './widgets/rating-stars/rating-stars';
import './widgets/rating-stars-pick/rating-stars-pick';
import './widgets/meal-review/meal-review';
import './widgets/date-chip-select/date-chip-select';
import './widgets/date-filter-modal/date-filter-modal';
import './widgets/chip-select-none-chip/chip-select-none-chip';
import './widgets/group/group.widget';
import './widgets/group-date/group-date.widget';
import './widgets/group-date-add/group-date-add.widget';
import './widgets/group-create-modal/group-create-modal.widget';
import './widgets/horizontal-scroller/horizontal-scroller.widget';
import './widgets/share-modal/share-modal.widget';
import './widgets/group-date-add-modal/group-date-add-modal';
import './widgets/back-button/back-button';
import './widgets/profile/profile.widget';
import './widgets/image-select/image-select.widget';

import './../node_modules/macro-carousel/dist/macro-carousel.min.js';
