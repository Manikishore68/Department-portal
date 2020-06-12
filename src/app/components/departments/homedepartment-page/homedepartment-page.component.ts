import { Component, OnInit } from '@angular/core';
import {IDepartment} from '../../../models/IDepartment';
import {DepartmentService} from '../../../services/department.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homedepartment-page',
  templateUrl: './homedepartment-page.component.html',
  styleUrls: ['./homedepartment-page.component.css']
})
export class HomedepartmentPageComponent implements OnInit {
  public departments:IDepartment[] = [];

  constructor(private _departmentService:DepartmentService,
              private _router:Router) { }

  ngOnInit(): void {
    this._departmentService.getAllDepartments().subscribe((resoponse)=>{
      this.departments = resoponse;
    });
  }

  // delete an Department
  public deleteDepartment(departmentID){
    this._departmentService.deleteDepartment(departmentID).subscribe((response)=>{
      // reload the same component
      this._router.navigateByUrl('/add-department-page',{skipLocationChange:true}).then(()=>{
        this._router.navigate(['/department'])
      });
    });
  }

}
