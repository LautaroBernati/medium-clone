import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { TranslateLoader, TranslateModule, TranslateStore } from '@ngx-translate/core';
import { TranslateJsonLoader } from './shared/classes/translate-json-loader';

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: () => {
          return new TranslateJsonLoader();
        },
      },
      defaultLanguage: 'en',
    }),
    AppModule,
    ServerModule,
  ],
  providers: [
    TranslateStore,
    TranslateJsonLoader
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
