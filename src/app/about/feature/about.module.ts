import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutPage } from './about.page';
import { AboutRoutingModule } from './about-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { LetModule, PushModule } from '@ngrx/component';


@NgModule({
  declarations: [AboutPage],
  imports: [
    AboutRoutingModule,
    CommonModule,
    LetModule,
    PushModule,
    TranslateModule,
  ],
  exports: [AboutPage],
  providers: [],
})
export class AboutModule { }
