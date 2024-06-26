import { NgModule } from '@angular/core';
import { ErrorPagesPage } from './error-pages.page';
import { CommonModule } from '@angular/common';
import { ErrorPagesRoutingModule } from './error-pages-routing.module';
import { ErrorComponent } from '../ui/error.component';
import { PushPipe } from '@ngrx/component';


@NgModule({
  imports: [
    CommonModule,
    ErrorPagesRoutingModule,
    ErrorComponent,
    PushPipe,
  ],
  declarations: [ErrorPagesPage],
  exports: [ErrorPagesPage],
  providers: [],
})
export class ErrorPagesModule { }
