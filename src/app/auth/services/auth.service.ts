import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRegisterRequest } from '../types/register-request.interface';
import { Observable, map } from 'rxjs';
import { ICurrentUser } from '../../shared/types/current-user.interface';
import { environment } from 'src/environments/environment';
import { ILoginRequest } from '../types/login-request.interface';

export declare type AuthResponseDTO = {
  user: ICurrentUser;
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly _http = inject(HttpClient);
  private readonly _url = environment.apiUrl;

  public registerUser(data: IRegisterRequest): Observable<ICurrentUser> {
    const url = this._url.concat('/users');

    return this._http.post<AuthResponseDTO>(url, data).pipe(map(this._mapResponse));
  }

  public login(data: ILoginRequest): Observable<ICurrentUser> {
    return this._http.post<AuthResponseDTO>(this._url.concat('/users/login'), data).pipe(map(this._mapResponse));
  }

  private _mapResponse(res: AuthResponseDTO): ICurrentUser {
    return res.user;
  }
}
