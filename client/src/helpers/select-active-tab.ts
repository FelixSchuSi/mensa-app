import { Routes } from '../routes';
import { routerService } from '../services/router.service';

export function selectActiveTab(tabsComponent: HTMLIonTabsElement): void {
  const currentRoute = routerService.getPath();
  if (currentRoute.startsWith(Routes.TASKS)) {
    tabsComponent.select(Routes.TASKS);
  } else if (currentRoute.startsWith(Routes.MEALS_TODAY)) {
    tabsComponent.select(Routes.MEALS_TODAY);
  } else if (currentRoute.startsWith(Routes.MEALS_FUTURE)) {
    tabsComponent.select(Routes.MEALS_FUTURE);
  } else if (currentRoute.startsWith(Routes.GROUPS)) {
    tabsComponent.select(Routes.GROUPS);
  }
}
