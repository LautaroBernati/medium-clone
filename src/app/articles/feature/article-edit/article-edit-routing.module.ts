import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ArticleEditPage } from './article-edit.page';


const routes: Route[] = [
  {
    path: '',
    component: ArticleEditPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleEditRoutingModule { }
