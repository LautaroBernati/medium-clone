import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mc-loading',
  template: `<div>Loading...</div>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent { }
