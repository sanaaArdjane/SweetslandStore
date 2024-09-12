import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {routes} from "./app.routes";
import {provideRouter} from "@angular/router";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withFetch(),
    ),
    provideRouter(routes), provideAnimationsAsync(),
  ]
};
