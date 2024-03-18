import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, filter, map, take, tap } from 'rxjs';
import { profileActions } from '../../../../profiles/data-access/store/profiles-store.actions';
import { PartialProfile, selectFollowProfileData, selectFollowProfileIsLoading } from '../data-access/follow-profile.reducers';
import { selectArticleData } from '../../../../articles/data-access/store/reducers';
import { Article } from '../../../../articles/data-access/services/articles.service';

@Component({
  selector: 'app-follow-profile',
  templateUrl: 'follow-profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FollowProfileComponent {
  private readonly _store = inject(Store);
  public readonly data$ = combineLatest({
    isLoading: this._store.select(selectFollowProfileIsLoading),
    isFollowing: this._store.select(selectFollowProfileData).pipe(
      tap(data => {
        if (data === null) {
          this._store.select(selectArticleData).pipe(
            take(1),
            filter((article): article is Article => !!article),
          ).subscribe((article) => {
            // gets the profile from the current article instead.
            this._store.dispatch(profileActions.getProfile({ username: article.author.username }));
          });
        }
      }),
      filter((profile): profile is PartialProfile => (!!profile)),
      map(data => data.isFollowing),
    ),
  });

  public onFollow(): void {
    this._store.select(selectFollowProfileData).pipe(
      take(1),
      filter((profile): profile is PartialProfile => !!profile),
    ).subscribe(profile => {
      if (profile.isFollowing) {
        this._store.dispatch(profileActions.unfollowAuthor({ username: profile.username }));
      } else {
        this._store.dispatch(profileActions.followAuthor({ username: profile.username }));
      }
    });
  }
}
