/* eslint-disable @typescript-eslint/naming-convention */
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IRegisterRequest } from '../types/register-request.interface';
import { ICurrentUser } from '../../shared/types/current-user.interface';
import { IBackendErrors } from '../../shared/types/backend-errors.interface';
import { ILoginRequest } from '../types/login-request.interface';
import { ProfileSettings } from '../services/auth.service';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: IRegisterRequest }>(),
    'Register Success': props<{ currentUser: ICurrentUser }>(),
    'Register Failure': props<{ errors: IBackendErrors }>(),

    Login: props<{ request: ILoginRequest }>(),
    'Login Success': props<{ currentUser: ICurrentUser }>(),
    'Login Failure': props<{ errors: IBackendErrors }>(),

    'Get Current User': emptyProps(),
    'Get Current User Success': props<{ currentUser: ICurrentUser }>(),
    'Get Current User Failure': emptyProps(),

    'Log Out': emptyProps(),
    'Log Out Success': emptyProps(),
    'Log Out Failure': emptyProps(),

    'Update Current User': props<{ currentUserReq: ProfileSettings }>(),
    'Update Current User Success': props<{ currentUser: ICurrentUser }>(),
    'Update Current User Failure': props<{ errors: IBackendErrors }>(),
  },
});
