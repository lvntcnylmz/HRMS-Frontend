import { JobSeeker } from './../models/jobSeeker';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

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

  getJobSeekerById(id: number): Observable<SingleResponseModel<JobSeeker>> {
    let newPath = this.apiURL + 'jobSeekers/getById/' + id;
    return this.httpClient.get<SingleResponseModel<JobSeeker>>(newPath);
  }
}
