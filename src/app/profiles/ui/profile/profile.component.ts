import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Profile } from '../../../shared/services/profiles-main.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileLinks } from '../../feature/profile-detail/profile-detail.page';

@Component({
  selector: 'prf-profile-ui',
  templateUrl: 'profile.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule]
})
export class ProfileComponent implements OnInit {
  @Input('userProfile') public userProfile!: Profile;
  @Input('isCurrentUserProfile') public isCurrentUserProfile = false;
  @Input('isLoading') public isLoading = false;
  @Input('activeLink') public activeLink: ProfileLinks = 'author';

  @Output('authorPosts') public readonly authorPostsEmitter$ = new EventEmitter();
  @Output('favoritedPosts') public readonly favoritedPostsEmitter$ = new EventEmitter();

  public ngOnInit(): void {
    if (!this.userProfile) {
      throw new Error('Must provide userProfile');
    }
  }
}
