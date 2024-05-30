import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LetDirective, PushPipe } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'mc-loading',
  templateUrl: 'loading.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PushPipe, LetDirective, TranslateModule],
})
export class LoadingComponent { }
