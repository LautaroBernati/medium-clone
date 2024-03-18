/* eslint-disable @typescript-eslint/naming-convention */
import { createActionGroup, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Profile } from '../../../shared/services/profiles-main.service';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';


export const profileActions = createActionGroup({
  source: 'profile',
  events: {
    'Get Profile': props<{ username: string }>(),
    'Get Profile Success': props<{ profile: Profile }>(),
    'Get Profile Failure': props<{ error: HttpErrorResponse }>(),

    'Follow Author': props<{ username: string }>(),
    'Follow Author Success': props<{ profile: Profile }>(),
    'Follow Author Failure': props<{ errors: IBackendErrors }>(),

    'Unfollow Author': props<{ username: string }>(),
    'Unfollow Author Success': props<{ profile: Profile }>(),
    'Unfollow Author Failure': props<{ errors: IBackendErrors }>(),
  },
});
