import { NgModule } from '@angular/core';
import { FavArticleComponent } from './fav-article.component';
import { CommonModule } from '@angular/common';
import { LetDirective, PushPipe } from '@ngrx/component';


@NgModule({
  declarations: [FavArticleComponent],
  imports: [CommonModule, PushPipe, LetDirective],
  exports: [FavArticleComponent],
  providers: [],
})
export class FavArticleModule { }
