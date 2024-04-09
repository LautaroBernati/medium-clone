import { NgModule } from '@angular/core';
import { ArticleDetailPage } from './article-detail.page';
import { CommonModule } from '@angular/common';
import { ArticleDetailRoutingModule } from './article-detail-routing.module';
import { BackendErrorMessagesComponent } from '../../../shared/components/backend-error-messages/backend-error-messages.component';
import { ArticleDetailComponent } from '../../ui/article-detail/article-detail.component';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { FavArticleModule } from '../../../shared/components/fav-article/feature/fav-article.module';
import { FollowProfileModule } from '../../../shared/components/follow-profile/feature/follow-profile.module';
import { CommentsListModule } from '../comments-list/comments-list.module';
import { PushModule } from '@ngrx/component';

@NgModule({
  declarations: [ArticleDetailPage],
  imports: [
    CommonModule,
    ArticleDetailRoutingModule,
    BackendErrorMessagesComponent,
    ArticleDetailComponent,
    LoadingComponent,
    FavArticleModule,
    FollowProfileModule,
    CommentsListModule,
    PushModule,
  ],
  exports: [],
  providers: [],
})
export class ArticleDetailModule { }
