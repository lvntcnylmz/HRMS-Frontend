import { JobSeeker } from './../models/jobSeeker';
import { Employer } from './../models/employer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../models/responseModel';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  apiURL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {}

  jobSeekerRegister(jobSeeker: JobSeeker): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiURL + 'jobSeekers/add',
      jobSeeker
    );
  }

  employerRegister(employer: Employer): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiURL + 'employers/add',
      employer
    );
  }
}
