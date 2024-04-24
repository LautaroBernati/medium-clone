import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SettingsPage } from './settings.page';
import { authGuard } from '../../shared/guards/auth.guard';

const routes: Route[] = [
  {
    path: 'settings',
    pathMatch: 'full',
    title: 'Settings',
    canMatch: [authGuard],
    component: SettingsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
