export abstract class PersistanceClass {
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

  public deleteData(): void {
    const arr = [];

    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i)!.substring(0, this._appKey.length) === this._appKey) {
        arr.push(localStorage.key(i));
      }
    }

    for (let i = 0; i < arr.length; i++) {
      localStorage.removeItem(arr[i]!);
    }
  }

  public deletePreferences(): void {
    const length = localStorage.length;
    const itemKeysToRemove: string[] = [];

    for (let i = 0; i < length; i++) {
      const key = localStorage.key(i);

      if (key && key.includes('pref_')) {
        itemKeysToRemove.push(key);
      }
    }

    for (let index = 0; index < itemKeysToRemove.length; index++) {
      this._findAndDelete(itemKeysToRemove[index]);
    }
  }

  private _findAndDelete(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch {
      console.error('error deleting storage');
    }
  }
}
