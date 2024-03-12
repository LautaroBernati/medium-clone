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
    RegisterSuccess: props<{ currentUser: ICurrentUser }>(),
    RegisterFailure: props<{ errors: IBackendErrors }>(),

    Login: props<{ request: ILoginRequest }>(),
    LoginSuccess: props<{ currentUser: ICurrentUser }>(),
    LoginFailure: props<{ errors: IBackendErrors }>(),

    GetCurrentUser: emptyProps(),
    GetCurrentUserSuccess: props<{ currentUser: ICurrentUser }>(),
    GetCurrentUserFailure: emptyProps(),

    'Log Out': emptyProps(),
    'Log Out Success': emptyProps(),
    'Log Out Failure': emptyProps(),

    'Update Current User': props<{ currentUserReq: ProfileSettings }>(),
    'Update Current User Success': props<{ currentUser: ICurrentUser }>(),
    'Update Current User Failure': props<{ errors: IBackendErrors }>(),
  },
});
