import { NgModule } from '@angular/core';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfilesService } from '../../data-access/profiles.service';
import { EffectsModule } from '@ngrx/effects';
import * as profileEffects from '../../data-access/store/profiles-store.effects';
import { provideState } from '@ngrx/store';
import { profileFeatureKey, profileReducer } from '../../data-access/store/profiles-store.reducers';


@NgModule({
  imports: [
    ProfilesRoutingModule,
    
    EffectsModule.forFeature(profileEffects),
  ],
  exports: [],
  providers: [
    ProfilesService,
    provideState(profileFeatureKey, profileReducer),
  ],
})
export class ProfilesModule { }
