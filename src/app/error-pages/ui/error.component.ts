import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'err-error-ui',
  templateUrl: 'error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ErrorComponent {
  @Input('errorCode') public errorCode = 0;
  @Input('description') public description = '';
}