import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '../../data-access/services/articles.service';
import { CommonModule } from '@angular/common';
import { ICurrentUser } from '../../../shared/types/current-user.interface';
import { RouterModule } from '@angular/router';
import { TagListComponent } from '../../../shared/components/tag-list/tag-list.component';

@Component({
  selector: 'art-article-detail-ui',
  templateUrl: 'article-detail.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, TagListComponent],
})
export class ArticleDetailComponent {
  @Input('article') public article: Article | null = null;
  @Input('user') public user: ICurrentUser | null = null;
  @Input('isLoading') public isLoading = false;

  @Output('editArticle') public readonly editArticleEmitter$ = new EventEmitter();
  @Output('deleteArticle') public readonly deleteArticleEmitter$ = new EventEmitter<boolean>();
  @Output('markAsFavorite') public readonly markAsFavoriteEmitter$ = new EventEmitter();
  @Output('followAuthor') public readonly followAuthorEmitter$ = new EventEmitter<string>();

  public showConfirmation = false;
}
