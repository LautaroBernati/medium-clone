import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LetModule, PushModule } from '@ngrx/component';
import packageJson from '../../../../../package.json';
import { TranslateModule } from '@ngx-translate/core';
import { ThemesService } from '../../services/themes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mc-footer-ui',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PushModule, LetModule, TranslateModule, CommonModule],
})
export class FooterComponent {
  private readonly _themesService = inject(ThemesService);

  public readonly version = packageJson.version;
  public readonly currentTheme$ = this._themesService.appThemes$;
}
