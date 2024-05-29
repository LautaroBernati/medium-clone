import { NgModule } from '@angular/core';
import { FollowProfileComponent } from './follow-profile.component';
import { CommonModule } from '@angular/common';
import { ProfilesService } from '../data-access/profiles.service';
import { PushPipe } from '@ngrx/component';


@NgModule({
  declarations: [FollowProfileComponent],
  imports: [CommonModule, PushPipe],
  exports: [FollowProfileComponent],
  providers: [ProfilesService],
})
export class FollowProfileModule { }
