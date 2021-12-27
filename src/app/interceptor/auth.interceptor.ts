import { LoginService } from './../services/login.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');
    let newRequest: HttpRequest<any>;

    if (this.loginService.isAuthenticated()) {
      newRequest = request.clone({
        setHeaders: { Authorization: 'Bearer ' + token },
      });
      return next.handle(newRequest);
    } else {
      return next.handle(request);
    }
  }
}
