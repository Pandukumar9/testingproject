import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.baseURL}`);
  }

  createEmployee(employee: any): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: any): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


  addstuent(emp:any):Observable<any>{
    return this.httpClient.post(this.baseURL,emp);
  }

  delete(id:any):Observable<any>{
    return this.httpClient.delete(this.baseURL,id);
  }
   
  empdetailsbyid(id:any):Observable<any>{
    return this.httpClient.get(this.baseURL,id)
  }

  emplst():Observable<any>{
    return this.httpClient.get(this.baseURL)
  }

  updateEmp(id: number,emp: any){
    return this.httpClient.put(`${this.baseURL}/${id}`,emp)
  }
}
