import { Component, OnInit, inject } from '@angular/core';
import { FeedComponent } from '../../../shared/components/feed/feed.component';
import { BannerComponent } from '../../../shared/components/banner/banner.component';
import { ErrorMessageComponent } from '../../../shared/components/error-message/error-message.component';
import { PopularTagsComponent } from '../../../shared/components/popular-tags/popular-tags.component';
import { FeedTogglerComponent } from '../../../shared/components/feed-toggler/feed-toggler.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mc-tag-feed',
  templateUrl: 'tag-feed.component.html',
  standalone: true,
  imports: [FeedComponent, BannerComponent, ErrorMessageComponent, PopularTagsComponent, FeedTogglerComponent]
})
export class TagFeedComponent implements OnInit {
  private readonly _route = inject(ActivatedRoute);
  public apiUrl = '';
  public tagName = '';
  
  public ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.tagName = params['slug'];
      this.apiUrl = `/articles?tag=${this.tagName}`;
    });
  }
}
