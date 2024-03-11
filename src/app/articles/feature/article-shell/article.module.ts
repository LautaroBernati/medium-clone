import { NgModule } from '@angular/core';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticlesService } from '../../data-access/services/articles.service';
import { CommonModule } from '@angular/common';
import { BackendErrorMessagesComponent } from '../../../shared/components/backend-error-messages/backend-error-messages.component';
import { ArticleDetailModule } from '../article-detail/article-detail.module';
import { ProfilesService } from '../../data-access/services/profiles.service';
import { EffectsModule } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { articleFeatureKey, articleReducer } from '../../data-access/store/reducers';
import * as articleEffects from '../../data-access/store/effects';


@NgModule({
  imports: [
    ArticleRoutingModule,
    CommonModule,
    BackendErrorMessagesComponent,
    ArticleDetailModule,
    EffectsModule.forFeature(articleEffects)
  ],
  providers: [
    ArticlesService,
    ProfilesService,
    provideState(articleFeatureKey, articleReducer),
    // provideEffects(articleEffects),
  ],
  exports: [],
})
export class ArticleShellModule { }
