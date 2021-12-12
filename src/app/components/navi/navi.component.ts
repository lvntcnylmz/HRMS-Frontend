import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  loginComponent: LoginComponent;

  constructor() {}

  ngOnInit(): void {}

  isLoggedIn(): boolean {
    if (this.loginComponent.isLogin) {
      return true;
    } else {
      return false;
    }
  }
}
