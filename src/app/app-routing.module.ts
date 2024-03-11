import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'register',
    pathMatch: 'full',
    title: 'Register',
    loadChildren: () => import('./auth/auth.routes').then(m => m.registerRoutes),
  },
  {
    path: 'login',
    title: 'Log In',
    pathMatch: 'full',
    loadChildren: () => import('./auth/auth.routes').then(m => m.loginRoutes),
  },
  {
    path: 'home',
    pathMatch: 'full',
    title: 'Medium Clone',
    loadChildren: () => import('./global-feed/global-feed.routes').then(m => m.globalFeedRoutes),
  },
  {
    path: 'feed',
    title: 'Feed',
    pathMatch: 'full',
    loadChildren: () => import('./your-feed/your-feed.routes').then(m => m.yourFeedRoutes),
  },
  {
    path: 'tags/:slug',
    title: 'Tags',
    pathMatch: 'full',
    loadChildren: () => import('./tag-feed/tag-feed.routes').then(m => m.tagFeedRoutes),
  },
  {
    path: 'articles',
    // pathMatch: 'full',
    loadChildren: () => import('./articles/feature/article-shell/article.module').then(m => m.ArticleShellModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
