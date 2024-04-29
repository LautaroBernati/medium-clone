import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { favArticleActions } from '../data-access/fav-article.actions';
import { BehaviorSubject, map } from 'rxjs';
import { selectCurrentUser } from '../../../../auth/store/store.reducers';

/**
 * Because likes or favorites are deemed 'not as important', this component uses the 'optimistic update' approach.
 * Meaning that it will not await the result of any call, and will assume the result as a success every time.
 * Also worth noting that this component is a "smart" component though it receives Inputs, as it will be shared in various
 * places of the app.
 */
@Component({
  selector: 'app-fav-article',
  templateUrl: 'fav-article.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavArticleComponent implements OnInit, OnDestroy {
  private readonly _favCountEmitter$ = new BehaviorSubject(0);
  private readonly _isFavoritedEmitter$ = new BehaviorSubject(false);
  private readonly _store = inject(Store);
  
  public readonly isAuth$ = this._store.select(selectCurrentUser).pipe(
    map(user => !!user),
  );

  @Input('isFavorited')
  public isFavorited = false;

  @Input('favCount')
  public favCount = 0;

  @Input('articleSlug')
  public slug = '';

  public readonly favCount$ = this._favCountEmitter$.asObservable();
  public readonly isFavorited$ = this._isFavoritedEmitter$.asObservable();

  public ngOnInit(): void {
    if (!this.slug) {
      throw new Error ('Must provide slug');
    }

    this._favCountEmitter$.next(this.favCount);
    this._isFavoritedEmitter$.next(this.isFavorited);
  }

  public ngOnDestroy(): void {
    this._favCountEmitter$.complete();
    this._isFavoritedEmitter$.complete();
  }

  public onFavorite(): void {
    if (this.isFavorited) {
      this._favCountEmitter$.next(this.favCount - 1);
      this.favCount -= 1;
    } else {
      this._favCountEmitter$.next(this.favCount + 1);
      this.favCount += 1;
    }

    this._isFavoritedEmitter$.next(!this.isFavorited);
    this.isFavorited = !this.isFavorited;

    this._store.dispatch(favArticleActions.favoriteArticle({
      slug: this.slug,
      isFavorited: this.isFavorited,
    }));
  }
}
