import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ArticleCreatePage } from './article-create.page';


const routes: Route[] = [
  {
    path: '',
    component: ArticleCreatePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleCreateRoutingModule { }
