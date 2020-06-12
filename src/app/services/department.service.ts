import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IDepartment} from '../models/IDepartment';
import {retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private _httpClient:HttpClient) { }
  // get all departments
  public getAllDepartments():Observable<IDepartment[]>{
  let dataURL = `http://127.0.0.1:3000/api/departments`;
  return this._httpClient.get<IDepartment[]>(dataURL).pipe(
    retry(1)
  )
  }

  // get a single Department
  public getDepartment(departmentID):Observable<IDepartment>{
    let dataURL = `http://127.0.0.1:3000/api/departments/${departmentID}`;
    return this._httpClient.get<IDepartment>(dataURL).pipe(
      retry(1)
    )
  }

  // create a new Department
  public createDepartment(department:IDepartment):Observable<any>{
    let newDepartment = {
      first_name : department.first_name,
      last_name : department.last_name,
      email : department.email,
      departmentType : department.departmentType,
      ip_address : department.ip_address
    };
    let dataURL =  `http://127.0.0.1:3000/api/departments`;
    return this._httpClient.post<any>(dataURL,newDepartment).pipe(
      retry(1)
    )
  }
  // update an department
  public updateDepartment(departmentID,department):Observable<any>{
    let updateDepartment = {
      first_name: department.first_name,
      last_name: department.last_name,
      email: department.email,
      departmentType: department.departmentType,
      ip_address: department.ip_address
    };
    let dataURL = `http://127.0.0.1:3000/api/departments/${departmentID}`;
    return this._httpClient.put(dataURL,updateDepartment).pipe(
      retry(1)
    )
  }

  // Delete an department
  public deleteDepartment(departmentID):Observable<any>{
    let dataURL = `http://127.0.0.1:3000/api/departments/${departmentID}`;
    return this._httpClient.delete<any>(dataURL).pipe(
      retry(1)
    )
  }
}
