import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Profile } from '../../../shared/services/profiles-main.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileLinks } from '../../feature/profile-detail/profile-detail.page';
import { LetDirective, PushPipe } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { AppTheme } from '../../../shared/types/themes.interface';

@Component({
  selector: 'prf-profile-ui',
  templateUrl: 'profile.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, PushPipe, LetDirective, TranslateModule]
})
export class ProfileComponent implements OnInit, OnChanges, OnDestroy {
  private readonly _themesEmitter$ = new BehaviorSubject<AppTheme | null>(null);

  @Input('userProfile') public userProfile!: Profile;
  @Input('isCurrentUserProfile') public isCurrentUserProfile = false;
  @Input('isLoading') public isLoading = false;
  @Input('activeLink') public activeLink: ProfileLinks = 'author';
  @Input() public theme: null | AppTheme = null;

  @Output('authorPosts') public readonly authorPostsEmitter$ = new EventEmitter();
  @Output('favoritedPosts') public readonly favoritedPostsEmitter$ = new EventEmitter();
  public readonly theme$ = this._themesEmitter$.asObservable();

  public ngOnInit(): void {
    if (!this.userProfile) {
      throw new Error('Must provide userProfile');
    }

    if (this.theme) {
      this._themesEmitter$.next(this.theme);
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['theme']) {
      this._themesEmitter$.next(changes['theme'].currentValue);
    }
  }

  public ngOnDestroy(): void {
    this._themesEmitter$.complete();
  }
}
