import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  isAuthenticated(): boolean {
    return this.loginService.isAuthenticated();
  }

  logout() {
    this.loginService.logout();
  }
}
