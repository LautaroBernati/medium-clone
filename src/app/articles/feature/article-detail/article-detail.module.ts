import { NgModule } from '@angular/core';
import { ArticleDetailPage } from './article-detail.page';
import { CommonModule } from '@angular/common';
import { ArticleDetailRoutingModule } from './article-detail-routing.module';
import { BackendErrorMessagesComponent } from '../../../shared/components/backend-error-messages/backend-error-messages.component';
import { ArticleDetailComponent } from '../../ui/article-detail/article-detail.component';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';

@NgModule({
  declarations: [ArticleDetailPage],
  imports: [
    CommonModule,
    ArticleDetailRoutingModule,
    BackendErrorMessagesComponent,
    ArticleDetailComponent,
    LoadingComponent,
  ],
  exports: [],
  providers: [],
})
export class ArticleDetailModule { }
