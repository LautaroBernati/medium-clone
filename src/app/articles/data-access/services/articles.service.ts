import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, delay, map } from 'rxjs';

declare type ArticleDTO = {
  article: {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: Array<string>;
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: {
      username: string;
      bio: string;
      image: string;
      following: boolean;
    };
  };
};

/**
 * These are the keys that can be either created or edited.
 */
export declare type EditableArticle = Omit<
  ArticleDTO['article'],
  'createdAt' | 'updatedAt' | 'favorited' | 'favoritesCount' | 'author' | 'slug'
>;

export declare type CreateArticleDTO = EditableArticle;

/**
 * Can't edit tags.
 */
export declare type EditArticleDTO = Omit<CreateArticleDTO, 'tagList'>;

export declare type Article = Omit<ArticleDTO['article'], 'createdAt' | 'updatedAt'> & {
  createdAt: Date;
  updatedAt: Date;
};

@Injectable()
export class ArticlesService {
  private readonly _http = inject(HttpClient);
  private readonly _url = environment.apiUrl + '/articles';

  public getArticlesBySlug(slug: string): Observable<Article> {
    return this._http.get<ArticleDTO>(this._url.concat('/' + slug)).pipe(
      map((data) => this._mapToArticle(data)),
      delay(3000),
    );
  }

  public createArticle(article: CreateArticleDTO): Observable<Article> {
    return this._http.post<ArticleDTO>(this._url, { article }).pipe(
      map((data) => this._mapToArticle(data)),
    );
  }

  public editArticle(data: EditArticleDTO, slug: string): Observable<Article> {
    return this._http.put<ArticleDTO>(
      this._url.concat(`/${slug}`),
      { article: data }
    ).pipe(
      map((data) => this._mapToArticle(data)),
    );
  }

  public deleteArticle(slug: string): Observable<void> {
    return this._http.delete<void>(
      this._url.concat(`/${slug}`),
    );
  }

  public favoriteArticle(slug: string): Observable<Article> {
    return this._http.post<ArticleDTO>(
      this._url.concat(`/${slug}/favorite`),
      undefined
    ).pipe(
      map((data) => this._mapToArticle(data)),
    );
  }

  public unfavoriteArticle(slug: string): Observable<Article> {
    return this._http.delete<ArticleDTO>(
      this._url.concat(`/${slug}/favorite`),
    ).pipe(
      map((data) => this._mapToArticle(data)),
    );
  }

  private _mapToArticle(dto: ArticleDTO): Article {
    return {
      ...dto.article,
      createdAt: new Date(dto.article.createdAt),
      updatedAt: new Date(dto.article.updatedAt),
    };
  }
}
