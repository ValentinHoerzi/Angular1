import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceRes } from './service-component/serviceRes.model';
import { Observable } from 'rxjs';
import { ServiceDto } from './service-component/serviceDto.model';
import { ServerResponse } from 'http';
import { EmployeeRes } from './service-component/employeeRes.model';
import { EmployeeDto } from './service-component/employeeDto.model';

@Injectable({
  providedIn: 'root',
})
export class LogicService {
  EMPLOYEE_MICROSERVICE_URL: string =
    'http://localhost:8080/employeeMicroservice/employees/';
  SERVICE_MICROSERVICE_URL: string =
    'http://localhost:7070/serviceMicroservice/services/';

  constructor(private http: HttpClient) {}

  getServices(): Observable<ServiceRes[]> {
    return this.http.get<ServiceRes[]>(this.SERVICE_MICROSERVICE_URL);
  }

  getServiceById(id: string): Observable<ServiceRes> {
    return this.http.get<ServiceRes>(this.SERVICE_MICROSERVICE_URL + id);
  }

  addService(data: ServiceDto): Observable<ServiceRes> {
    return this.http.post<ServiceRes>(this.SERVICE_MICROSERVICE_URL, data);
  }

  updateService(id: string, data: ServiceDto): Observable<ServiceRes> {
    return this.http.put<ServiceRes>(this.SERVICE_MICROSERVICE_URL + id, data);
  }

  deleteService(id: string): Observable<string> {
    return this.http.delete<string>(this.SERVICE_MICROSERVICE_URL + id);
  }

  getEmployees(): Observable<EmployeeRes[]> {
    return this.http.get<EmployeeRes[]>(this.EMPLOYEE_MICROSERVICE_URL);
  }

  getEmployeeById(id: string): Observable<EmployeeRes> {
    return this.http.get<EmployeeRes>(this.EMPLOYEE_MICROSERVICE_URL + id);
  }

  addEmployee(data: EmployeeDto): Observable<EmployeeRes> {
    return this.http.post<EmployeeRes>(this.EMPLOYEE_MICROSERVICE_URL, data);
  }

  updateEmployee(id: string, data: EmployeeDto): Observable<EmployeeRes> {
    return this.http.put<EmployeeRes>(this.EMPLOYEE_MICROSERVICE_URL + id,data);
  }

  deleteEmployee(id: string): Observable<string> {
    return this.http.delete<string>(this.EMPLOYEE_MICROSERVICE_URL + id);
  }
}
