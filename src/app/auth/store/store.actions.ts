import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IRegisterRequest } from '../types/register-request.interface';
import { ICurrentUser } from '../../shared/types/current-user.interface';
import { IBackendErrors } from '../../shared/types/backend-errors.interface';
import { ILoginRequest } from '../types/login-request.interface';

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
  },
});
