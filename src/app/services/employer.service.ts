import { EmployerResponse } from './../models/employerResponse';
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

  getEmployers(): Observable<ListResponseModel<EmployerResponse>> {
    let newPath = this.apiURL + 'employers/';
    return this.httpClient.get<ListResponseModel<EmployerResponse>>(newPath);
  }

  getEmployerById(
    id: number
  ): Observable<SingleResponseModel<EmployerResponse>> {
    let newPath = this.apiURL + 'employers/' + id;
    return this.httpClient.get<SingleResponseModel<EmployerResponse>>(newPath);
  }
}
