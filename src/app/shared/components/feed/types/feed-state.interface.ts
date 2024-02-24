import { IGetFeedResponse } from './feed-response.interface';

export interface IFeedState {
  isLoading: boolean;
  error: string | null;
  data: IGetFeedResponse | null;
}
