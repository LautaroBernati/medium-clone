import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ErrorPagesPage } from './error-pages.page';

const routes: Route[] = [
  {
    path: 'error/:errorNumber',
    title: 'Error',
    component: ErrorPagesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorPagesRoutingModule { }
