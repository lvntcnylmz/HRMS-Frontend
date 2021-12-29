import { User } from './../../models/user';
import { JobSeeker } from './../../models/jobSeeker';
import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { UserService } from 'src/app/services/user.service';
import { Employer } from 'src/app/models/employer';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  userId: number;
  user: any;
  token: any;
  roles: string[];
  verfiedToken: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUserIdFromToken();
    this.getUserById(this.userId);
  }

  getUserById(id: number) {
    this.userService.getById(id).subscribe((response) => {
      this.user = response.data;
    });
  }

  getUserIdFromToken() {
    this.token = localStorage.getItem('token');
    this.verfiedToken = jwtDecode(this.token);
    this.roles = this.verfiedToken.roles;
    this.userId = parseInt(this.verfiedToken.aud);
  }

  isJobSeeker(): boolean {
    if (this.roles.includes('EMPLOYER')) {
      return false;
    }
    return true;
  }
}
