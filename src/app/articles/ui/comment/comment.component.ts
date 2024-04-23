import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Comment } from '../../data-access/services/articles.service';
import { LetModule, PushModule } from '@ngrx/component';
import { BehaviorSubject, combineLatest, startWith } from 'rxjs';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppTheme } from '../../../shared/types/themes.interface';

@Component({
  selector: 'art-comment-ui',
  templateUrl: 'comment.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['comment.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, LetModule, PushModule, RouterModule, TranslateModule],
})
export class CommentComponent implements OnInit, OnChanges, OnDestroy {
  @Input('comment') public comment?: Comment;
  @Input('isLoading') public isLoading = false;
  @Input('isSubmitting') public isSubmitting = false;
  @Input('showAuthorOptions') public showAuthorOptions = false;
  @Input() public theme: null | AppTheme = null;

  private readonly _themeEmitter$ = new BehaviorSubject<AppTheme | null>(null);
  private readonly _inputValuesEmitter$ = new BehaviorSubject<{
    comment?: Comment;
    isLoading: boolean;
    isSubmitting: boolean;
    showAuthorOptions: boolean;
  }>({
    isLoading: false,
    isSubmitting: false,
    showAuthorOptions: false,
  });
  private readonly _showConfirmationEmitter$ = new BehaviorSubject(false);
  @Output('createComment') private readonly _createCommentEmitter$ = new EventEmitter<string>();
  @Output('cancel') public readonly cancelEmitter$ = new EventEmitter();
  @Output('deleteComment') private readonly _deleteCommentEmitter$ = new EventEmitter<string>();

  public readonly form = new FormGroup({
    commentDesc: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
  });
  public readonly theme$ = this._themeEmitter$.asObservable();
  public readonly data$ = combineLatest({
    formValues: this.form.valueChanges.pipe(startWith(this.form.getRawValue())),
    formStatus: this.form.statusChanges.pipe(startWith(this.form.status)),
    inputValues: this._inputValuesEmitter$.asObservable(),
    showConfirmation: this._showConfirmationEmitter$.asObservable(),
  });

  public ngOnInit(): void {
    if (this.comment) {
      this.form.controls.commentDesc.patchValue(this.comment.body);
    }

    this._inputValuesEmitter$.next({
      isLoading: this.isLoading,
      isSubmitting: this.isSubmitting,
      showAuthorOptions: this.showAuthorOptions,
      comment: this.comment,
    });

    if (this.theme) {
      this._themeEmitter$.next(this.theme);
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['isLoading'] || changes['isSubmitting']) {
      this._inputValuesEmitter$.next({
        ...this._inputValuesEmitter$.getValue(),
        isLoading: (changes['isLoading']) ? changes['isLoading'].currentValue : this._inputValuesEmitter$.getValue().isLoading,
        isSubmitting: changes['isSubmitting'] ? changes['isSubmitting'].currentValue : this._inputValuesEmitter$.getValue().isSubmitting,
      });
    }

    if (changes['theme']) {
      this._themeEmitter$.next(changes['theme'].currentValue);
    }
  }

  public ngOnDestroy(): void {
    this._inputValuesEmitter$.complete();
    this._showConfirmationEmitter$.complete();
    this._themeEmitter$.complete();
  }

  public handleShowConfirmation(value: boolean): void {
    this._showConfirmationEmitter$.next(value);
  }

  public emitDeleteComment(id: string): void {
    this._deleteCommentEmitter$.emit(id);
  }

  public onSubmit(): void {
    this._createCommentEmitter$.emit(this.form.controls.commentDesc.getRawValue());
  }
}
