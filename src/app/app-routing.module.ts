import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HomePageComponent} from './components/employees/home-page/home-page.component';
import {AddEmployeeComponent} from './components/employees/add-employee/add-employee.component';
import {UpdateEmployeeComponent} from './components/employees/update-employee/update-employee.component';
import {HomedepartmentPageComponent} from './components/departments/homedepartment-page/homedepartment-page.component';
import {AddDepartmentPageComponent} from './components/departments/add-department-page/add-department-page.component';
import {UpdateDepartmentPageComponent} from './components/departments/update-department-page/update-department-page.component';


const routes: Routes = [
  { path: 'employee', component: HomePageComponent},
  { path : 'add-employee' , component : AddEmployeeComponent },
  { path : 'employees/:_id' , component : UpdateEmployeeComponent },
  { path : 'department', component : HomedepartmentPageComponent},
  { path : 'add-department', component : AddDepartmentPageComponent},
  { path : 'departments/:_id', component : UpdateDepartmentPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
