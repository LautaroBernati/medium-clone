import { Component, Input } from '@angular/core';

@Component({
  selector: 'mc-error-message',
  template: `<div>{{ message }}</div>`,
  standalone: true,
})
export class ErrorMessageComponent {
  @Input('errorMessage') public message: string = 'Something went wrong';
}
