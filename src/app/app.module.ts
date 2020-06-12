import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './components/employees/update-employee/update-employee.component';
import { HomePageComponent } from './components/employees/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import {EmployeeService} from './services/employee.service';
import { AddDepartmentPageComponent } from './components/departments/add-department-page/add-department-page.component';
import { HomedepartmentPageComponent } from './components/departments/homedepartment-page/homedepartment-page.component';
import { UpdateDepartmentPageComponent } from './components/departments/update-department-page/update-department-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    HomePageComponent,
    AddDepartmentPageComponent,
    HomedepartmentPageComponent,
    UpdateDepartmentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ EmployeeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
