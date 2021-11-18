import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobAdvertisement } from '../models/jobAdvertisement';
import { JobPosition } from '../models/jobPosition';

@Injectable({
  providedIn: 'root',
})
export class JobPositionService {
  apiURL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {}

  getJobPositions(): Observable<ListResponseModel<JobPosition>> {
    let newPath = this.apiURL + 'jobPositions/getAll';
    return this.httpClient.get<ListResponseModel<JobPosition>>(newPath);
  }

  getJobById(jobId: number): Observable<ListResponseModel<JobPosition>> {
    let newPath = this.apiURL + 'jobPositions/getById?jobId=' + jobId;
    return this.httpClient.get<ListResponseModel<JobPosition>>(newPath);
  }
}
