import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';

interface IGetPopularTagsRes {
  tags: string[];
};

@Injectable({ providedIn: 'root' })
export class PopularTagService {
  private readonly _url = environment.apiUrl + '/tags';
  private readonly _http = inject(HttpClient);

  public getPopularTags(): Observable<string[]> {
    return this._http.get<IGetPopularTagsRes>(this._url).pipe(
      map(res => res.tags),
    );
  }
}
