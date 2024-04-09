import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mc-footer-ui',
  templateUrl: 'footer.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['footer.component.scss'],
})
export class FooterComponent { }
