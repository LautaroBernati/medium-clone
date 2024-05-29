import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleEditRoutingModule } from './article-edit-routing.module';
import { ArticleEditPage } from './article-edit.page';
import { ArticleFormComponent } from '../../ui/article-form/article-form.component';
import { BackendErrorMessagesComponent } from '../../../shared/components/backend-error-messages/backend-error-messages.component';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { PushPipe } from '@ngrx/component';


@NgModule({
  declarations: [ArticleEditPage],
  imports: [
    CommonModule,
    ArticleEditRoutingModule,
    ArticleFormComponent,
    BackendErrorMessagesComponent,
    LoadingComponent,
    PushPipe,
  ],
  exports: [],
  providers: [],
})
export class ArticleEditModule { }
