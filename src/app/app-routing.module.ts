import {Route, RouterModule} from '@angular/router';
import {EmployeeListComponent} from './employees/employee-list/employee-list.component';
import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Route [] = [
  {
    path: 'employees',
    children: [
      {
        path: 'new',
        component: EmployeeListComponent
      },
      {
        path: 'all',
        component: EmployeeListComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
