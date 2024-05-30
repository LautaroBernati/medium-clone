import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ICurrentUser } from '../../shared/types/current-user.interface';
import { BackendErrorMessagesComponent } from '../../shared/components/backend-error-messages/backend-error-messages.component';
import { IBackendErrors } from '../../shared/types/backend-errors.interface';
import { ProfileSettings } from '../../auth/services/auth.service';
import { LetDirective } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'stg-settings-ui',
  templateUrl: 'settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, BackendErrorMessagesComponent, LetDirective, TranslateModule]
})
export class SettingsComponent implements OnInit {
  @Input('currentUser') public currentUser?: ICurrentUser;
  @Input('errors') public errors: IBackendErrors | null = null;
  @Input('isSubmitting') public isSubmitting = false;
  @Output('logout') private readonly _logoutEmitter$ = new EventEmitter();
  @Output('saveSettings') private readonly _saveSettingsEmitter$ = new EventEmitter<ProfileSettings>();

  public readonly form = new FormGroup({
    image: new FormControl<string | null>(null, { validators: [] }),
    username: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
    bio: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
    email: new FormControl<string>('', { validators: [Validators.email, Validators.required], nonNullable: true }),
  });

  public ngOnInit(): void {
    if (!this.currentUser) {
      throw new Error('Must provide currentUser');
    }

    const { bio, image, username, email } = this.currentUser;

    this.form.patchValue({ bio: bio ?? '', image: image ?? '', username, email });
  }

  public onSubmit(): void {
    if (!this.currentUser) {
      throw new TypeError('CurrentUser is undefined');
    }

    this._saveSettingsEmitter$.emit({
      bio: this.form.controls.bio.getRawValue(),
      email: this.form.controls.email.getRawValue(),
      username: this.form.controls.username.getRawValue(),
      image: this.form.controls.image.getRawValue(),
    });
  }

  public onLogout(): void {
    this._logoutEmitter$.emit();
  }
}
