import {Route, RouterModule} from '@angular/router';
import {EmployeeListComponent} from './employees/employee-list/employee-list.component';
import {NgModule} from '@angular/core';

const routes: Route [] = [
  {
    path: 'employees',
    component: EmployeeListComponent
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
