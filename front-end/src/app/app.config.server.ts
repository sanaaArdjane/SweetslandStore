import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideServerRendering } from '@angular/platform-server';

export const config: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideServerRendering(),
    // Add other server-specific providers here if necessary
  ],
};
