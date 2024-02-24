import { Component } from '@angular/core';
import { FeedComponent } from '../../../shared/components/feed/feed.component';
import { BannerComponent } from '../../../shared/components/banner/banner.component';
import { ErrorMessageComponent } from '../../../shared/components/error-message/error-message.component';
import { PopularTagsComponent } from '../../../shared/components/popular-tags/popular-tags.component';
import { FeedTogglerComponent } from '../../../shared/components/feed-toggler/feed-toggler.component';

@Component({
  selector: 'mc-global-feed',
  templateUrl: 'global-feed.component.html',
  standalone: true,
  imports: [FeedComponent, BannerComponent, ErrorMessageComponent, PopularTagsComponent, FeedTogglerComponent]
})
export class GlobalFeedComponent {
  public readonly apiUrl = '/articles';

}
