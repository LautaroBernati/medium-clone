import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LetModule, PushModule } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'mc-loading',
  templateUrl: 'loading.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PushModule, LetModule, TranslateModule],
})
export class LoadingComponent { }
