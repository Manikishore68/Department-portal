import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {IEmployee} from '../../../models/IEmployee';
import {EmployeeService} from '../../../services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  public employeeID:string;
  public employee:IEmployee;
  constructor(private _activatedRoute:ActivatedRoute,
              private _employeeService:EmployeeService,
              private _router:Router) { }

  ngOnInit(): void {

    // get the _id from the browser URL
    this._activatedRoute.paramMap.subscribe((param:ParamMap) => {
      this.employeeID = param.get('_id');
    });

    // get an employee object from the server/service
    this._employeeService.getEmployee(this.employeeID).subscribe((response) => {
      this.employee = response;
    });
  }

  // updateEmployee
  public updateEmployee(){
    this._employeeService.updateEmployee(this.employeeID,this.employee).subscribe((response) => {
      this._router.navigate(['/employee']);
    });
  }

}
