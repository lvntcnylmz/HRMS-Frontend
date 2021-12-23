import { TokenModel } from './../models/tokenModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingleResponseModel } from '../models/singleResponseModel';
import { LoginModel } from '../models/loginModel';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl = 'http://localhost:8080/api/auth/login';

  constructor(private httpClient: HttpClient) {}

  login(userLoginModel: LoginModel) {
    return this.httpClient.post<SingleResponseModel<any>>(
      this.apiUrl,
      userLoginModel
    );
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
