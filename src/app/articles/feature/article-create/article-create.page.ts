import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EditableArticle } from '../../data-access/services/articles.service';
import { Store } from '@ngrx/store';
import { articleActions } from '../../data-access/store/actions';
import { selectArticleErrors, selectArticleIsLoading, selectArticleIsSubmitting } from '../../data-access/store/reducers';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'art-create',
  templateUrl: 'article-create.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCreatePage {
  private readonly _store = inject(Store);
  public readonly data$ = combineLatest({
    isLoading: this._store.select(selectArticleIsLoading),
    isSubmitting: this._store.select(selectArticleIsSubmitting),
    errors: this._store.select(selectArticleErrors),
  });

  public onCreate(create: EditableArticle): void {
    this._store.dispatch(articleActions.createArticle({ data: create }));
  }
}
