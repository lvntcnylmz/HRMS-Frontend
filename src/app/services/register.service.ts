import { JobSeeker } from 'src/app/models/jobSeeker';
import { Employer } from './../models/employer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/responseModel';


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
