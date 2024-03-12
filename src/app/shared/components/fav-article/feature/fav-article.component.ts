import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { favArticleActions } from '../data-access/fav-article.actions';

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
export class FavArticleComponent implements OnInit {
  @Input('isFavorited') public isFavorited = false;
  @Input('favCount') public favCount = 0;
  @Input('articleSlug') public slug = '';

  private readonly _store = inject(Store);

  public ngOnInit(): void {
    if (!this.slug) {
      throw new Error ('Must provide slug');
    }
  }

  public onFavorite(): void {
    if (this.isFavorited) {
      this.favCount -= 1;
    } else {
      this.favCount += 1;
    }

    this.isFavorited = !this.isFavorited;

    this._store.dispatch(favArticleActions.favoriteArticle({
      slug: this.slug,
      isFavorited: this.isFavorited,
    }));
  }
}
