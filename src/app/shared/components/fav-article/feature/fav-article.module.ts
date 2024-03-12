import { NgModule } from '@angular/core';
import { FavArticleComponent } from './fav-article.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [FavArticleComponent],
  imports: [CommonModule],
  exports: [FavArticleComponent],
  providers: [],
})
export class FavArticleModule { }
