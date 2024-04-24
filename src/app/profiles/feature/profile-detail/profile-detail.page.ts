import { ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, catchError, of, filter, tap, switchMap, shareReplay, combineLatest, BehaviorSubject } from 'rxjs';
import { profileActions } from '../../data-access/store/profiles-store.actions';
import { selectProfileData, selectProfileIsLoading, selectProfileValidationErrors } from '../../data-access/store/profiles-store.reducers';
import { selectCurrentUser } from '../../../auth/store/store.reducers';
import { ICurrentUser } from '../../../shared/types/current-user.interface';
import { Profile } from '../../../shared/services/profiles-main.service';
import { PreferencesService } from '../../../shared/services/preferences.service';

export declare type ProfileLinks = 'favorites' | 'author';

@Component({
  selector: 'prf-profile-detail',
  templateUrl: 'profile-detail.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileDetailPage implements OnDestroy {
  private readonly _route = inject(ActivatedRoute);
  private readonly _router = inject(Router);
  private readonly _store = inject(Store);
  private readonly _prefsService = inject(PreferencesService);
  private readonly _apiUrlEmitter$ = new BehaviorSubject<ProfileLinks>('author');

  public readonly apiUrl$ = this._apiUrlEmitter$.pipe(
    map(data => {
      const isFavorites = data === 'favorites';
      const username = this._route.snapshot.paramMap.get('username');

      return isFavorites ? `/articles?favorited=${username}` : `/articles?author=${username}`;
    }),
  );

  private readonly _item$ = this._route.paramMap.pipe(
    map(params => {
      const item = params.get('username');

      if (!item) {
        throw new TypeError('username not found');
      }

      return item;
    }),
    catchError((item) => {
      this._router.navigate(['/home']);

      return of(item);
    }),
    filter((data): data is string => typeof data === 'string'),
    tap((username) => this._store.dispatch(profileActions.getProfile({ username }))),
    switchMap(() => this._store.select(selectProfileData)),
    shareReplay({ bufferSize: 1, refCount: true }), // removes the need for duplicate gets. Never delete the refCount property.
  );

  public readonly data$ = combineLatest({
    profile: this._item$.pipe(
      filter((profile): profile is Profile => Boolean(profile)),
    ),
    error: this._store.select(selectProfileValidationErrors),
    isLoading: this._store.select(selectProfileIsLoading),
    isCurrentUserProfile: combineLatest({
      currentUser: this._store.select(selectCurrentUser).pipe(
        filter((currentUser): currentUser is ICurrentUser => Boolean(currentUser)),
      ),
      profile: this._item$.pipe(
        filter((profile): profile is Profile => Boolean(profile)),
      ),
    }).pipe(
      map(data => (data.currentUser.username === data.profile.username)),
    ),
    apiUrl: this.apiUrl$,
    activeLink: this._apiUrlEmitter$,
    theme: this._prefsService.appThemes$,
  });

  public onAuthorPosts(): void {
    this._apiUrlEmitter$.next('author');
  }

  public onFavoritedPosts(): void {
    this._apiUrlEmitter$.next('favorites');
  }

  public ngOnDestroy(): void {
    this._apiUrlEmitter$.complete();
  }
}
