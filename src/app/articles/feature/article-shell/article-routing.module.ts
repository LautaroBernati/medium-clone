import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Route[] = [
  {
    path: 'create',
    pathMatch: 'full',
    loadChildren: () => import('../article-create/article-create.module').then(m => m.ArticleCreateModule),
  },
  {
    path: 'edit',
    pathMatch: 'full',
    loadChildren: () => import('../article-edit/article-edit.module').then(m => m.ArticleEditModule),
  },
  {
    path: ':slug', 
    loadChildren: () => import('../article-detail/article-detail.module').then(m => m.ArticleDetailModule),
  },
  {
    path: '**',
    redirectTo: 'create',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
