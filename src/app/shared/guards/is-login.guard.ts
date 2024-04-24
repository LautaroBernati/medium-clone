import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs';
import { selectAuthData } from '../../auth/store/store.reducers';

/**
 * Restricts access to pages that a logged-in user should see.
 * @returns canMatchFn
 */
export const isLoginGuard: CanMatchFn = () => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(selectAuthData).pipe(
    filter((data) => (!data.isLoading)),
    map(data => {
      if (data.currentUser) {
        return router.createUrlTree(['/home']);
      } else {
        return true;
      }
    }),
  );
};
