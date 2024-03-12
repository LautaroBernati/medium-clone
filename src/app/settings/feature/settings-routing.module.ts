import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SettingsPage } from './settings.page';

const routes: Route[] = [
  {
    path: 'settings',
    pathMatch: 'full',
    title: 'Settings',
    component: SettingsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
