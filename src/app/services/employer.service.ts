import { SingleResponseModel } from './../models/singleResponseModel';
import { ResponseModel } from './../models/responseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employer } from '../models/employer';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class EmployerService {
  apiURL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {}

  getEmployers(): Observable<ListResponseModel<Employer>> {
    let newPath = this.apiURL + 'employers/getAll';
    return this.httpClient.get<ListResponseModel<Employer>>(newPath);
  }

  getEmployerById(id: number): Observable<SingleResponseModel<Employer>> {
    let newPath = this.apiURL + 'employers/getById/' + id;
    return this.httpClient.get<SingleResponseModel<Employer>>(newPath);
  }
}
