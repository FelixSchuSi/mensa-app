import { Routes } from '../routes';
import { routerService } from '../services/router.service';

// Handles the back Button inside of the app
// Performs history.back() if the last route is within this application
// navigates to predefined route if the last route is outside this application
export function goBackTo(route: Routes): void {
  if (window.history.state && window.history.state.prevUrl) {
    history.back();
  } else {
    routerService.navigate(route);
  }
}
