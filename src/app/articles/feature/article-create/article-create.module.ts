import { NgModule } from '@angular/core';
import { ArticleCreatePage } from './article-create.page';
import { CommonModule } from '@angular/common';
import { ArticleCreateRoutingModule } from './article-create-routing.module';
import { ArticleFormComponent } from '../../ui/article-form/article-form.component';

@NgModule({
  declarations: [ArticleCreatePage],
  imports: [
    ArticleCreateRoutingModule,
    CommonModule,
    ArticleFormComponent,
  ],
  exports: [],
  providers: [],
})
export class ArticleCreateModule { }
