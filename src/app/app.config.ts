import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

import  localEs  from '@angular/common/locales/es-MX';
import  localFr  from '@angular/common/locales/fr';
import { Local } from './services/local';

registerLocaleData(localEs, 'es-MX');
registerLocaleData(localFr, 'fr');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide : LOCALE_ID,
      // useValue : 'es'
      deps: [Local],
      useFactory: (localService : Local) => localService.getLocal()
    }
  ]
};
