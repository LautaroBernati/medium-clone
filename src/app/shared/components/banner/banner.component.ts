import { Component } from '@angular/core';
import { LetModule, PushModule } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'mc-banner',
  templateUrl: 'banner.component.html',
  standalone: true,
  imports: [LetModule, TranslateModule, PushModule]
})
export class BannerComponent { }
