import { Component, Input, OnInit } from '@angular/core';
import { IBackendErrors } from '../../types/backend-errors.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: 'backend-error-messages.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('errors') public backendErrors: IBackendErrors = {};
  public errorMessages: string[] = [];

  public ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map(name => {
      const messages = this.backendErrors[name].join(' ');

      return `${name} ${messages}`;
    });
  }
}
