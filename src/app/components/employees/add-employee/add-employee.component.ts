import { Component, OnInit } from '@angular/core';
import {IEmployee} from '../../../models/IEmployee';
import {EmployeeService} from '../../../services/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  public employee:IEmployee = {
    _id : '',
    first_name : '',
    last_name : '',
    email : '',
    gender : '',
    ip_address : ''
  };

  constructor(private _employeeService:EmployeeService,
              private _router:Router) { }

  ngOnInit(): void {
  }

  // addEmployee
  public addEmployee(){
    this._employeeService.createEmployee(this.employee).subscribe((response) => {
      this._router.navigate(['/employee']);
    });
  }
}
