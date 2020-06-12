import { Component, OnInit } from '@angular/core';
import {IDepartment} from '../../../models/IDepartment';
import {DepartmentService} from '../../../services/department.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-department-page',
  templateUrl: './add-department-page.component.html',
  styleUrls: ['./add-department-page.component.css']
})
export class AddDepartmentPageComponent implements OnInit {

  public department:IDepartment = {
    _id : '',
    first_name : '',
    last_name : '',
    email : '',
    departmentType : '',
    ip_address : '',
  };
  constructor(private _departmentService : DepartmentService,
              private _router : Router) { }

  ngOnInit(): void {
  }
  // add Department
  public addDepartment(){
    this._departmentService.createDepartment(this.department).subscribe((response)=>{
      this._router.navigate(['/department'])
    });
  }

}
