import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProfileDetailPage } from './profile-detail.page';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: ProfileDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileDetailRoutingModule { }
