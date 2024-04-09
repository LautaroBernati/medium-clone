import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommentsListPage } from './comments-list.page';
import { CommentComponent } from '../../ui/comment/comment.component';
import { LetModule, PushModule } from '@ngrx/component';


@NgModule({
  declarations: [CommentsListPage],
  imports: [
    CommonModule,
    CommentComponent,
    PushModule,
    LetModule,
  ],
  exports: [CommentsListPage],
  providers: [],
})
export class CommentsListModule { }
