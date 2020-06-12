import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../../services/employee.service';
import {IEmployee} from '../../../models/IEmployee';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public employees:IEmployee[] = [];
  constructor(private _employeeService:EmployeeService,
              private _router:Router) { }

  ngOnInit(): void {
    this._employeeService.getAllEmployees().subscribe((response) => {
      this.employees = response;
    });
  }

  // delete Employee
  public deleteEmployee(employeeID){
    this._employeeService.deleteEmployee(employeeID).subscribe((response) => {
        // reload the same component
      this._router.navigateByUrl('/add-employee', { skipLocationChange: true }).then(() => {
        this._router.navigate(['/employee']);
      });
    });
  }

}
