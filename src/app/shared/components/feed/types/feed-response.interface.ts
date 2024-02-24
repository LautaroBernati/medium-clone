import { IArticle } from '../../../../shared/types/article.interface';

export interface IGetFeedResponse {
  articles: IArticle[];
  articlesCount: number;
}