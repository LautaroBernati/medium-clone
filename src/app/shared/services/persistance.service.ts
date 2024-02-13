import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PersistanceService {
  private readonly _appKey = 'mc_app_';

  public set(key: string, data: unknown): void {
    try {
      localStorage.setItem(this._appKey.concat(key), JSON.stringify(data));
    } catch (err) {
      console.error('Error saving to local storage', err);
    }
  }

  public get(key: string): unknown {
    try {
      const item = localStorage.getItem(this._appKey.concat(key));

      return item ? JSON.parse(item) : null;
    } catch (err) {
      console.error('Error getting from local storage', err);

      return null;
    }
  }
}
