import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'register',
    pathMatch: 'full',
    loadChildren: () => import('./auth/auth.routes').then(m => m.registerRoutes),
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadChildren: () => import('./auth/auth.routes').then(m => m.loginRoutes),
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: () => import('./global-feed/global-feed.routes').then(m => m.globalFeedRoutes),
  },
  {
    path: 'feed',
    pathMatch: 'full',
    loadChildren: () => import('./your-feed/your-feed.routes').then(m => m.yourFeedRoutes),
  },
  {
    path: 'tags/:slug',
    pathMatch: 'full',
    loadChildren: () => import('./tag-feed/tag-feed.routes').then(m => m.tagFeedRoutes),
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
