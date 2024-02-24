import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authFeatureKey, authReducer } from './auth/store/store.reducers';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import * as authEffects from './auth/store/store.effects';
import * as feedEffects from './shared/components/feed/store/effects';
import * as popularTagsEffects from './shared/components/popular-tags/store/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { TopbarComponent } from './shared/components/top-bar/top-bar.component';
import { authInterceptor } from './shared/services/auth.interceptor';
import { feedFeatureKey, feedReducer } from './shared/components/feed/store/reducers';
import { popularTagsFeatureKey, popularTagsReducer } from './shared/components/popular-tags/store/reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TopbarComponent],
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideStore({
      router: routerReducer,
    }),
    provideRouterStore(),
    provideState(authFeatureKey, authReducer),
    provideState(feedFeatureKey, feedReducer),
    provideState(popularTagsFeatureKey, popularTagsReducer),
    provideEffects(authEffects, feedEffects, popularTagsEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: true,
      traceLimit: 75,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
