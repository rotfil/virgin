import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { RecordEffects } from './state/records/record.effects';
import { recordReducer } from './state/records/record.reducer';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideStore(),
    provideStoreDevtools(),
    provideState(recordReducer),
    provideEffects([RecordEffects]),
    provideHttpClient()
  ]
};
