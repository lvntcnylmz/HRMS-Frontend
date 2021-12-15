import { JobSeeker } from './../models/jobSeeker';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class JobSeekerService {
  apiURL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {}

  getJobSeekers(): Observable<ListResponseModel<JobSeeker>> {
    let newPath = this.apiURL + 'jobSeekers/getAll';
    return this.httpClient.get<ListResponseModel<JobSeeker>>(newPath);
  }
}
