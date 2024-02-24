import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilityService {
  public range(start: number, end: number): Array<number> {
    return [...Array(end - start).keys()].map((el) => el + start);
  }
}
