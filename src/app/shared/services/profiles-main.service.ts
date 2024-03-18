import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';

declare type ProfileDTO = {
  'profile': Profile;
}

export declare type Profile = {
  'username': string;
  'bio': string;
  'image': string;
  'following': boolean;
}

export abstract class ProfilesMainService {
  private readonly _http = inject(HttpClient);
  private readonly _url = environment.apiUrl + '/profiles';

  protected followUser(username: string): Observable<Profile> {
    return this._http.post<ProfileDTO>(
      this._url.concat(`/${encodeURIComponent(username)}/follow`),
      undefined
    ).pipe(
      map(this._mapToDTO),
    );
  }

  protected getProfileByUsername(slug: string): Observable<Profile> {
    return this._http.get<ProfileDTO>(
      this._url.concat('/' + slug),
    ).pipe(
      map(this._mapToDTO),
    );
  }

  protected unfollowUser(username: string): Observable<Profile> {
    return this._http.delete<ProfileDTO>(
      this._url.concat(`/${encodeURIComponent(username)}/follow`),
    ).pipe(
      map(this._mapToDTO),
    );
  }

  private _mapToDTO(dto: ProfileDTO): Profile {
    return dto.profile;
  }
}
