import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LeftSidebarComponent} from './left-sidebar/left-sidebar.component';
import {TopNavbarComponent} from './top-navbar/top-navbar.component';
import {FooterComponent} from './footer/footer.component';
import {EmployeeListComponent} from './employees/employee-list/employee-list.component';
import {AppRoutingModule} from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeCardComponent } from './employees/employee-list/employee-card/employee-card.component';
import {FormsModule} from '@angular/forms';
import { AddNewEmployeeComponent } from './employees/add-new-employee/add-new-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    TopNavbarComponent,
    FooterComponent,
    EmployeeListComponent,
    PageNotFoundComponent,
    EmployeeCardComponent,
    AddNewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
