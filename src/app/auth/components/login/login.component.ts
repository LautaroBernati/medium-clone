import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/store.actions';
import { CommonModule } from '@angular/common';
import { selectIsSubmitting, selectValidationErrors } from '../../store/store.reducers';
import { combineLatest } from 'rxjs';
import { BackendErrorMessagesComponent } from '../../../shared/components/backend-error-messages/backend-error-messages.component';
import { LetModule, PushModule } from '@ngrx/component';


@Component({
  selector: 'mc-login',
  templateUrl: 'login.component.html',
  standalone: true,
  imports: [RouterModule, LetModule, ReactiveFormsModule, CommonModule, BackendErrorMessagesComponent, PushModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public readonly form = new FormGroup({
    email: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    password: new FormControl('', { validators: [Validators.required], nonNullable: true }),
  });

  private readonly _store = inject(Store);
  public readonly data$ = combineLatest({
    isSubmitting: this._store.select(selectIsSubmitting),
    backendErrors: this._store.select(selectValidationErrors),
  });

  public onSubmit(): void {
    this._store.dispatch(
      authActions.login({
        request: {
          user: {
            ...this.form.getRawValue(),
            email: this.form.controls.email.getRawValue().toLowerCase(),
          },
        },
      }),
    );
  }
}
