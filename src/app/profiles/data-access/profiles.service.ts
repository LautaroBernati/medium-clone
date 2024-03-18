import { Injectable } from '@angular/core';
import { Profile, ProfilesMainService } from '../../shared/services/profiles-main.service';
import { Observable } from 'rxjs';

@Injectable()
export class ProfilesService extends ProfilesMainService {
  constructor() {
    super();
  }

  public override getProfileByUsername(username: string): Observable<Profile> {
    return super.getProfileByUsername(username);
  }

  public override followUser(username: string): Observable<Profile> {
    return super.followUser(username);
  }

  public override unfollowUser(username: string): Observable<Profile> {
    return super.unfollowUser(username);
  }
}
