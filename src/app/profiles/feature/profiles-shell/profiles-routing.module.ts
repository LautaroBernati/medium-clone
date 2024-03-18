import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Route[] = [
  {
    path: ':username',
    loadChildren: () => import('../profile-detail/profile-detail.module').then(m => m.ProfileDetailModule),
  },
  {
    path: ':username/favorites',
    loadChildren: () => import('../profile-detail/profile-detail.module').then(m => m.ProfileDetailModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilesRoutingModule { }
