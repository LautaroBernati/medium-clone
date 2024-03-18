import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile, ProfilesMainService } from '../../../../shared/services/profiles-main.service';


@Injectable()
export class ProfilesService extends ProfilesMainService {
  constructor() {
    super();
  }

  public override followUser(username: string): Observable<Profile> {
    return super.followUser(username);
  }
}
