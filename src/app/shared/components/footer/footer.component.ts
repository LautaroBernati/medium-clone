import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LetModule, PushModule } from '@ngrx/component';
import packageJson from '../../../../../package.json';

@Component({
  selector: 'mc-footer-ui',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PushModule, LetModule]
})
export class FooterComponent {
  private readonly _http = inject(HttpClient);
  public readonly version = packageJson.version;
}
