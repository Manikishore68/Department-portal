import { Component, OnInit } from '@angular/core';
import {IDepartment} from '../../../models/IDepartment';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {DepartmentService} from '../../../services/department.service';

@Component({
  selector: 'app-update-department-page',
  templateUrl: './update-department-page.component.html',
  styleUrls: ['./update-department-page.component.css']
})
export class UpdateDepartmentPageComponent implements OnInit {
  public departmentID:string;
  public department:IDepartment;
  constructor(private _activatedRoute:ActivatedRoute,
              private _departmentService:DepartmentService,
              private _router:Router) { }

  ngOnInit(): void {
    // get the _id from the browser  URL
    this._activatedRoute.paramMap.subscribe((param:ParamMap)=>{
    this.departmentID = param.get('_id');
    });
    // get an department object from server / service
    this._departmentService.getDepartment(this.departmentID).subscribe((response)=>{
      this.department = response;
    });
  }
  // update Department
  public updateDepartment(){
    this._departmentService.updateDepartment(this.departmentID,this.department).subscribe((response)=>{
    this._router.navigate(['/department']);
    });
  }

}
