import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection, LOCALE_ID } from '@angular/core';
import { provideRouter, withRouterConfig, withPreloading, PreloadAllModules, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

registerLocaleData(localeIt);

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'it-IT' },
    provideZoneChangeDetection({
      eventCoalescing: true,
      runCoalescing: true
    }),
    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload',
        urlUpdateStrategy: 'deferred',
        paramsInheritanceStrategy: 'always'
      }),
      withPreloading(PreloadAllModules),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      })
    ),
    provideHttpClient(
      withInterceptorsFromDi(),
      withFetch()
    ),
    provideAnimationsAsync(),
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({eventCoalescing: true})
  ]
};