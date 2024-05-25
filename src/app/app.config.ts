import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

export const appConfig = [
  provideRouter(routes, withComponentInputBinding()),
  provideHttpClient()
];
