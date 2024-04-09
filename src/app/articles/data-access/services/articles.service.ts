import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, delay, map } from 'rxjs';

declare type Author = {
  username: string;
  bio: string;
  image: string;
  following: boolean;
};

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
    author: Author;
  };
};

declare type CommentDTO = {
  id: string;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: Author;
};

export type Comment = Omit<CommentDTO, 'createdAt' | 'updatedAt'> & {
  [K in 'createdAt' | 'updatedAt']: Date;
};

/**
 * These are the keys that can be either created or edited.
 */
export type EditableArticle = Omit<
  ArticleDTO['article'],
  'createdAt' | 'updatedAt' | 'favorited' | 'favoritesCount' | 'author' | 'slug'
>;

export type CreateArticleDTO = EditableArticle;

/**
 * Can't edit tags.
 */
export type EditArticleDTO = Omit<CreateArticleDTO, 'tagList'>;

export type Article = Omit<ArticleDTO['article'], 'createdAt' | 'updatedAt'> & {
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
    ).pipe(
      delay(2000),
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
      map((this._mapToArticle)),
    );
  }

  public getCommentsBySlug(slug: string): Observable<Comment[]> {
    return this._http.get<{ comments: Array<CommentDTO> }>(
      this._url.concat(`/${slug}/comments`),
    ).pipe(
      map((data) => data.comments),
      map((data: CommentDTO[]) => (data.map(this._mapToComment))),
    );
  }

  public createArticleComment(articleSlug: string, body: string): Observable<Comment> {
    return this._http.post<CommentDTO>(
      this._url.concat(`/${articleSlug}/comments`),
      { comment: { body }},
    ).pipe(
      map(this._mapToComment),
      delay(2000),
    );
  }

  public deleteArticleComment(articleSlug: string, commentId: string): Observable<void> {
    return this._http.delete<void>(
      this._url.concat(`/${articleSlug}/comments/${commentId}`),
    ).pipe(
      delay(2000),
    );
  }

  private _mapToArticle(dto: ArticleDTO): Article {
    return {
      ...dto.article,
      createdAt: new Date(dto.article.createdAt),
      updatedAt: new Date(dto.article.updatedAt),
    };
  }

  private _mapToComment(dto: CommentDTO): Comment {
    return {
      ...dto,
      createdAt: new Date(dto.createdAt),
      updatedAt: new Date(dto.updatedAt),
    };
  }
}
