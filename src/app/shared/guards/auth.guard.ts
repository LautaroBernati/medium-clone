import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAuthData } from '../../auth/store/store.reducers';
import { filter, map } from 'rxjs';

/**
 * Restricts access to pages a non-logged-in user should see.
 * @returns canMatchFn
 */
export const authGuard: CanMatchFn = () => {
  const router = inject(Router);
  const store = inject(Store);

  return store.select(selectAuthData).pipe(
    filter((data) => (!data.isLoading)),
    map(data => {
      if (data.currentUser) {
        return true;
      } else {
        return router.createUrlTree(['/login']);
      }
    }),
  );
};
