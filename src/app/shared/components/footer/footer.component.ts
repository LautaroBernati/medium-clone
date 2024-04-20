import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LetModule } from '@ngrx/component';
import packageJson from '../../../../../package.json';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { PreferencesService } from '../../services/preferences.service';

@Component({
  selector: 'mc-footer-ui',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LetModule, TranslateModule, CommonModule],
})
export class FooterComponent {
  private readonly _prefsService = inject(PreferencesService);

  public readonly version = packageJson.version;
  public readonly currentTheme$ = this._prefsService.appThemes$;
}
