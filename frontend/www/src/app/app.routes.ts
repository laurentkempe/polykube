import { provideRouter, RouterConfig } from '@angular/router';

import { AboutRoutes } from './about/about.routes';
import { CountersRoutes } from './counters/counters.routes';

export const routes: RouterConfig = [
  ...CountersRoutes,
  ...AboutRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
