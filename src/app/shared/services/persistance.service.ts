/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { PersistanceClass } from '../classes/persistance.class';

@Injectable()
export class PersistanceService extends PersistanceClass {}

export class PersistanceServiceServer extends PersistanceClass {
  public override set = (): void => {
    console.debug('dummy is being executed');
  };

  public override get(): string {
    return '';
  }

  public override deleteData(): void {}

  public override deletePreferences(): void {}
}
