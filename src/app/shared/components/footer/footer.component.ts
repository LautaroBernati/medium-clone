import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LetModule, PushModule } from '@ngrx/component';
import packageJson from '../../../../../package.json';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'mc-footer-ui',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PushModule, LetModule, TranslateModule]
})
export class FooterComponent {
  public readonly version = packageJson.version;
}
