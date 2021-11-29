import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/responseModel';
import { JobSeeker } from '../models/jobSeeker';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  apiURL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {}

  userRegister(jobSeeker: JobSeeker): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiURL + 'jobSeekers/add',
      jobSeeker
    );
  }
}
