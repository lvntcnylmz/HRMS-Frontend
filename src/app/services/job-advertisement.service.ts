import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobAdvertisement } from '../models/jobAdvertisement';

@Injectable({
  providedIn: 'root',
})
export class JobAdvertisementService {
  apiURL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {}

  getJobAdvertisements(): Observable<ListResponseModel<JobAdvertisement>> {
    let newPath = this.apiURL + 'jobAdvertisements/getAll';
    return this.httpClient.get<ListResponseModel<JobAdvertisement>>(newPath);
  }

  getJObAdvertisementByJobPositionId(jobId: number) {
    let newPath = this.apiURL + 'jobAdvertisements/getByJobId?jobId=' + jobId;
    return this.httpClient.get<ListResponseModel<JobAdvertisement>>(newPath);
  }
}
