import { NgModule } from '@angular/core';
import { ArticleRoutingModule } from './article-routing.module';
import { CommonModule } from '@angular/common';
import { BackendErrorMessagesComponent } from '../../../shared/components/backend-error-messages/backend-error-messages.component';
import { ArticleDetailModule } from '../article-detail/article-detail.module';
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
    provideState(articleFeatureKey, articleReducer),
  ],
  exports: [],
})
export class ArticleShellModule { }
