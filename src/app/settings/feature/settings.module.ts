import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { SettingsPage } from './settings.page';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from '../ui/settings.component';
import { provideState } from '@ngrx/store';
import { settingsFeatureKey, settingsReducer } from '../data-access/store/reducers';
import { PushModule } from '@ngrx/component';


@NgModule({
  declarations: [SettingsPage],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SettingsComponent,
    PushModule,
  ],
  exports: [SettingsPage],
  providers: [
    AuthService,
    provideState(settingsFeatureKey, settingsReducer),
  ],
})
export class SettingsModule { }
