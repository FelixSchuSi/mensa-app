import { Tab } from '../models/tab';
import { AppComponent } from '../pages/app.component';
import { RootRoutes, Routes } from '../routes';
import { routerService } from '../services/router.service';

export function getActiveNav(tabs: Tab[], appComponent: AppComponent): HTMLIonNavElement {
  let activeNav: HTMLIonNavElement;
  const activeRoute: Routes = routerService.getPath();
  if (isRootRoute(activeRoute)) {
    activeNav = <HTMLIonNavElement>document.querySelector('#root-nav');
  } else {
    const activeTab = tabs.find(tab => activeRoute.startsWith(tab.baseRoute))!;

    const allNavs: HTMLIonNavElement[] = <HTMLIonNavElement[]>(
      (<unknown>Array.from(appComponent.querySelectorAll('ion-tab>ion-nav')))
    );
    activeNav = allNavs.find(nav => nav.classList.contains(activeTab.baseRoute))!;
  }
  return activeNav;
}

export function isRootRoute(route: Routes): boolean {
  const rootRoutes: RootRoutes[] = Object.values(RootRoutes);
  // @ts-ignore
  return rootRoutes.some(rootRoute => rootRoute === route);
}
