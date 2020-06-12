import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {IEmployee} from '../models/IEmployee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _httpClient:HttpClient) { }

  // get all employees
  public getAllEmployees():Observable<IEmployee[]>{
    let dataURL = `http://127.0.0.1:3000/api/employees`;
    return this._httpClient.get<IEmployee[]>(dataURL).pipe(
      retry(1)
    )
  }

  // get a single employee
  public getEmployee(employeeID):Observable<IEmployee>{
    let dataURL = `http://127.0.0.1:3000/api/employees/${employeeID}`;
    return this._httpClient.get<IEmployee>(dataURL).pipe(
      retry(1)
    )
  }

  // create a new employee
  public createEmployee(employee:IEmployee):Observable<any>{
    let newEmployee = {
      first_name : employee.first_name,
      last_name : employee.last_name,
      email : employee.email,
      gender : employee.gender,
      ip_address : employee.ip_address
    };
    let dataURL = `http://127.0.0.1:3000/api/employees`;
    return this._httpClient.post<any>(dataURL,newEmployee).pipe(
      retry(1)
    )
  }

  // update an employee
  public updateEmployee(employeeID,employee):Observable<any>{
    let updatedEmployee = {
      first_name : employee.first_name,
      last_name : employee.last_name,
      email : employee.email,
      gender : employee.gender,
      ip_address : employee.ip_address
    };
    let dataURL = `http://127.0.0.1:3000/api/employees/${employeeID}`;
    return this._httpClient.put<any>(dataURL,updatedEmployee).pipe(
      retry(1)
    );
  }

  // delete Employee
  public deleteEmployee(employeeID):Observable<any>{
    let dataURL = `http://127.0.0.1:3000/api/employees/${employeeID}`;
    return this._httpClient.delete<any>(dataURL).pipe(
      retry(1)
    );
  }
}
