import { NgModule } from '@angular/core';
import { FavArticleComponent } from './fav-article.component';
import { CommonModule } from '@angular/common';
import { LetModule, PushModule } from '@ngrx/component';


@NgModule({
  declarations: [FavArticleComponent],
  imports: [CommonModule, PushModule, LetModule],
  exports: [FavArticleComponent],
  providers: [],
})
export class FavArticleModule { }
