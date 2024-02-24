import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGetFeedResponse } from '../types/feed-response.interface';

@Injectable({ providedIn: 'root' })
export class FeedService {
  private readonly _http = inject(HttpClient);
  private readonly _url = environment.apiUrl;

  public getFeed(url: string): Observable<IGetFeedResponse> {
    const fullUrl = this._url.concat(url);

    return this._http.get<IGetFeedResponse>(
      fullUrl
    );
  }
}
