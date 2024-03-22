import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Comment } from '../../data-access/services/articles.service';

@Component({
  selector: 'art-comment-ui',
  templateUrl: 'comment.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['comment.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class CommentComponent implements OnInit {
  @Input('comment') public comment?: Comment;
  @Input('isLoading') public isLoading = false;
  @Input('isSubmitting') public isSubmitting = false;
  @Input('showAuthorOptions') public showAuthorOptions = false;

  @Output('createComment') private readonly _createCommentEmitter$ = new EventEmitter<string>();
  @Output('cancel') public readonly cancelEmitter$ = new EventEmitter();
  @Output('deleteComment') private readonly _deleteCommentEmitter$ = new EventEmitter<string>();

  public showConfirmation = false;

  public readonly form = new FormGroup({
    commentDesc: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
  });

  public ngOnInit(): void {
    if (this.comment) {
      this.form.controls.commentDesc.patchValue(this.comment.body);
    }
  }

  public emitDeleteComment(id: string): void {
    this._deleteCommentEmitter$.emit(id);
  }

  public onSubmit(): void {
    this._createCommentEmitter$.emit(this.form.controls.commentDesc.getRawValue());
  }
}
