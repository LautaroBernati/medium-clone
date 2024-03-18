import { NgModule } from '@angular/core';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfilesService } from '../../data-access/profiles.service';
import { provideState } from '@ngrx/store';
import { profileFeatureKey, profileReducer } from '../../data-access/store/profiles-store.reducers';


@NgModule({
  imports: [
    ProfilesRoutingModule,
  ],
  exports: [],
  providers: [
    ProfilesService,
    provideState(profileFeatureKey, profileReducer),
  ],
})
export class ProfilesModule { }
