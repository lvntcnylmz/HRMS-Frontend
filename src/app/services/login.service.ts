import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl = 'http://localhost:8080/api/auth/login';

  constructor(private httpClient: HttpClient) {}

  login(userLoginModel: User): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl, userLoginModel);
  }
}
