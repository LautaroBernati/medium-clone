import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';

declare type ProfileDTO = {
  'profile': Profile;
}

declare type Profile = {
  'username': string;
  'bio': string;
  'image': string;
  'following': boolean;
}

@Injectable()
export class ProfilesService {
  private readonly _http = inject(HttpClient);
  private readonly _url = environment.apiUrl + '/profiles';
  
  public followUser(username: string): Observable<Profile> {
    return this._http.put<ProfileDTO>(
      this._url.concat(`/${encodeURIComponent(username)}/follow`),
      undefined
    ).pipe(
      map(data => data.profile),
    );
  }
}
