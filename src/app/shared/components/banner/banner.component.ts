import { Component } from '@angular/core';
import { LetModule } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'mc-banner',
  templateUrl: 'banner.component.html',
  standalone: true,
  imports: [LetModule, TranslateModule]
})
export class BannerComponent { }
