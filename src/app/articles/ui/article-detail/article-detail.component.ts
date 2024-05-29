import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Article } from '../../data-access/services/articles.service';
import { CommonModule } from '@angular/common';
import { ICurrentUser } from '../../../shared/types/current-user.interface';
import { RouterModule } from '@angular/router';
import { TagListComponent } from '../../../shared/components/tag-list/tag-list.component';
import { BehaviorSubject, filter, take } from 'rxjs';
import { LetDirective, PushPipe } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';

type InputValues = {
  article: Article | null;
  user: ICurrentUser | null;
  isLoading: boolean;
}

@Component({
  selector: 'art-article-detail-ui',
  templateUrl: 'article-detail.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, TagListComponent, PushPipe, LetDirective, TranslateModule],
})
export class ArticleDetailComponent implements OnInit, OnChanges, OnDestroy, InputValues {
  @Input('article') public article: Article | null = null;
  @Input('user') public user: ICurrentUser | null = null;
  @Input('isLoading') public isLoading = false;

  @Output('editArticle') public readonly editArticleEmitter$ = new EventEmitter();
  @Output('deleteArticle') public readonly deleteArticleEmitter$ = new EventEmitter<boolean>();

  private readonly _showConfirmationEmitter$ = new BehaviorSubject(false);
  private readonly _inputValuesEmitter$ = new BehaviorSubject<null | InputValues>(null);

  public readonly showConfirmation$ = this._showConfirmationEmitter$.asObservable();
  public inputValues$ = this._inputValuesEmitter$.asObservable();

  public ngOnInit(): void {
    this._inputValuesEmitter$.next({
      article: this.article,
      isLoading: this.isLoading,
      user: this.user,
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['isLoading']) {
      this._inputValuesEmitter$.pipe(
        take(1),
        filter((data): data is InputValues => !!data),
      ).subscribe(inputs => this._inputValuesEmitter$.next({ ...inputs, isLoading: changes['isLoading'].currentValue }));
    }
  }

  public ngOnDestroy(): void {
    this._showConfirmationEmitter$.complete();
  }

  public handleShowConfirmation(): void {
    this._showConfirmationEmitter$.next(true);
  }

  public handleConfirmDeletion(value: boolean): void {
    if (value) {
      this.deleteArticleEmitter$.emit(true);
    } else {
      this._showConfirmationEmitter$.next(false);
    }
  }
}
