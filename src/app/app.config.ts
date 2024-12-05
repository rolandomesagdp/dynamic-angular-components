import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CatalogService } from './catalogs/catalog.service';
import { APP_APPEARANCE } from './appearance/app-appearance';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    CatalogService,
    {
      provide: APP_APPEARANCE,
      useValue: 'rounded'
    }
  ]
};
