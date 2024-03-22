import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommentsListPage } from './comments-list.page';
import { CommentComponent } from '../../ui/comment/comment.component';
// import { CommentsListRoutingModule } from './comments-list-routing.module';


@NgModule({
  declarations: [CommentsListPage],
  imports: [
    // CommentsListRoutingModule,
    CommonModule,
    CommentComponent,
  ],
  exports: [CommentsListPage],
  providers: [],
})
export class CommentsListModule { }
