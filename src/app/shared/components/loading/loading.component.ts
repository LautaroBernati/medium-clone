import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LetModule, PushModule } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'mc-loading',
  template: `
    <div *ngrxLet="(('app' | translate) | ngrxPush) as translate">
      {{ translate.loadingText }}
    </div>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PushModule, LetModule, TranslateModule],
})
export class LoadingComponent { }
