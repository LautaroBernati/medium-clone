import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ArticleDetailPage } from './article-detail.page';

const routes: Route[] = [
  {
    path: '',
    component: ArticleDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleDetailRoutingModule { }
