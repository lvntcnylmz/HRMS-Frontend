import { SingleResponseModel } from './../models/singleResponseModel';
import { ResponseModel } from './../models/responseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiURL = 'http://localhost:8080/api/users/';

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<ListResponseModel<any>> {
    let newPath = this.apiURL + 'getAll';
    return this.httpClient.get<ListResponseModel<any>>(newPath);
  }

  getById(id: number) {
    let newPath = this.apiURL + id;
    return this.httpClient.get<SingleResponseModel<any>>(newPath);
  }
}
