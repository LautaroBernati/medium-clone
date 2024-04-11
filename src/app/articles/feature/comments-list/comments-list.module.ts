import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommentsListPage } from './comments-list.page';
import { CommentComponent } from '../../ui/comment/comment.component';
import { LetModule, PushModule } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [CommentsListPage],
  imports: [
    CommonModule,
    CommentComponent,
    PushModule,
    LetModule,
    TranslateModule,
  ],
  exports: [CommentsListPage],
  providers: [],
})
export class CommentsListModule { }
