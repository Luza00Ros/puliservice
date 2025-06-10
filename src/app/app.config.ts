import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection, LOCALE_ID } from '@angular/core';
import { provideRouter, withRouterConfig, withPreloading, PreloadAllModules, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';

import { routes } from './app.routes';

// Registra la localizzazione italiana
registerLocaleData(localeIt);

export const appConfig: ApplicationConfig = {
  providers: [
    // Localizzazione italiana
    { provide: LOCALE_ID, useValue: 'it-IT' },
    
    // Zone.js con ottimizzazioni per performance
    provideZoneChangeDetection({ 
      eventCoalescing: true,
      runCoalescing: true 
    }),
    
    // Router con preloading e ottimizzazioni
    provideRouter(
      routes, 
      withRouterConfig({ 
        onSameUrlNavigation: 'reload', 
        urlUpdateStrategy: 'deferred',
        paramsInheritanceStrategy: 'always'
      }),
      withPreloading(PreloadAllModules), // Precarica tutti i moduli lazy
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      })
    ),
    
    // HTTP Client con fetch API moderno
    provideHttpClient(
      withInterceptorsFromDi(),
      withFetch() // Usa fetch invece di XMLHttpRequest
    ),
    
    // Animazioni async per bundle size minore
    provideAnimationsAsync()
  ]
};