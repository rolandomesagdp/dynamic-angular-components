import { InjectionToken } from '@angular/core';

export const APP_APPEARANCE = new InjectionToken<AppAppearance>('appearance', {
  factory: () => 'squared'
});

export type AppAppearance = 'squared' | 'rounded';
