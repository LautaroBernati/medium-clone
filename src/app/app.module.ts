import { NgModule, inject, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authFeatureKey, authReducer } from './auth/store/store.reducers';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import * as authEffects from './auth/store/store.effects';
import * as feedEffects from './shared/components/feed/store/effects';
import * as popularTagsEffects from './shared/components/popular-tags/store/effects';
import * as globalEffects from './shared/store/effects';
import * as favArticlesEffects from './shared/components/fav-article/data-access/fav-article.effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { TopbarComponent } from './shared/components/top-bar/top-bar.component';
import { authInterceptor } from './shared/services/auth.interceptor';
import { feedFeatureKey, feedReducer } from './shared/components/feed/store/reducers';
import { popularTagsFeatureKey, popularTagsReducer } from './shared/components/popular-tags/store/reducers';
import { ErrorPagesModule } from './error-pages/feature/error-pages.module';
import { SettingsModule } from './settings/feature/settings.module';
import { ArticlesService } from './articles/data-access/services/articles.service';
import { followProfileFeatureKey, followProfileReducer } from './shared/components/follow-profile/data-access/follow-profile.reducers';
import * as profileEffects from './profiles/data-access/store/profiles-store.effects';
import * as preferencesEffects from './shared/store/preferences/preferences.effects';
import { ProfilesService } from './profiles/data-access/profiles.service';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TranslateLoader, TranslateModule, TranslateStore } from '@ngx-translate/core';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { preferencesFeatureKey, preferencesReducer } from './shared/store/preferences/preferences.reducers';
import { PersistanceService, PersistanceServiceServer } from './shared/services/persistance.service';
import { PersistanceClass } from './shared/classes/persistance.class';
import { TranslateJsonLoader } from './shared/classes/translate-json-loader';
import { PlatformService } from './shared/services/platform.service';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: () => {
          return new TranslateJsonLoader();
        },
      },
      defaultLanguage: 'en',
    }),
    AppRoutingModule,
    ErrorPagesModule,
    TopbarComponent,
    SidebarComponent,
    SettingsModule,
    EffectsModule.forRoot(globalEffects, favArticlesEffects, profileEffects, preferencesEffects),
    FooterComponent,
  ],
  providers: [
    TranslateJsonLoader,
    TranslateStore,
    {
      provide: PersistanceService,
      useFactory: (): PersistanceClass => {
        const service = inject(PlatformService);

        if (service.isBrowser()) {
          return new PersistanceService();
        } else {
          return new PersistanceServiceServer();
        }
      },
    },
    provideHttpClient(withInterceptors([authInterceptor])),
    ArticlesService,
    ProfilesService,
    provideStore({
      router: routerReducer,
    }),
    provideRouterStore(),
    provideState(authFeatureKey, authReducer),
    provideState(feedFeatureKey, feedReducer),
    provideState(popularTagsFeatureKey, popularTagsReducer),
    provideState(followProfileFeatureKey, followProfileReducer),
    provideEffects(authEffects, feedEffects, popularTagsEffects),
    provideState(preferencesFeatureKey, preferencesReducer),
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
