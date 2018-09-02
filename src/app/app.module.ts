import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LeftSidebarComponent} from './left-sidebar/left-sidebar.component';
import {TopNavbarComponent} from './top-navbar/top-navbar.component';
import {FooterComponent} from './footer/footer.component';
import {EmployeeListComponent} from './employees/employee-list/employee-list.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    TopNavbarComponent,
    FooterComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
