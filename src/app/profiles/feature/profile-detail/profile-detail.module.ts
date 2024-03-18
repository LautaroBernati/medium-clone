import { NgModule } from '@angular/core';
import { ProfileDetailPage } from './profile-detail.page';
import { CommonModule } from '@angular/common';
import { ProfileDetailRoutingModule } from './profile-detail-routing.module';
import { ProfileComponent } from '../../ui/profile/profile.component';
import { FeedComponent } from '../../../shared/components/feed/feed.component';


@NgModule({
  declarations: [ProfileDetailPage],
  imports: [
    ProfileDetailRoutingModule,
    CommonModule,
    ProfileComponent,
    FeedComponent,
  ],
  exports: [ProfileDetailPage],
  providers: [],
})
export class ProfileDetailModule { }
