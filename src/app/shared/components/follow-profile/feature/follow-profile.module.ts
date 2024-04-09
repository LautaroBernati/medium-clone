import { NgModule } from '@angular/core';
import { FollowProfileComponent } from './follow-profile.component';
import { CommonModule } from '@angular/common';
import { ProfilesService } from '../data-access/profiles.service';
import { PushModule } from '@ngrx/component';


@NgModule({
  declarations: [FollowProfileComponent],
  imports: [CommonModule, PushModule],
  exports: [FollowProfileComponent],
  providers: [ProfilesService],
})
export class FollowProfileModule { }
