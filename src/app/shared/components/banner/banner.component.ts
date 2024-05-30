import { Component } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'mc-banner',
  templateUrl: 'banner.component.html',
  standalone: true,
  imports: [LetDirective, TranslateModule]
})
export class BannerComponent { }
