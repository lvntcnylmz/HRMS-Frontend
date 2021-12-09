import { ToastrService } from 'ngx-toastr';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      let userLoginModel = Object.assign({}, this.loginForm.value);
      this.loginService.login(userLoginModel).subscribe((response) => {
        if (response.success == true) {
          this.router.navigateByUrl('');
          this.toastrService.success(response.message);
        } else {
          this.toastrService.error(response.message);
        }
      });
    }
  }
}
