import { isPlatformBrowser } from '@angular/common';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  constructor(@Inject(PLATFORM_ID) private _platformId: object) {}

  public isBrowser(): boolean {
    return isPlatformBrowser(this._platformId);
  }
}
