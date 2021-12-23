import { TokenModel } from './../../models/tokenModel';
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
    this.loginForm = this.formBuilder.group(
      {
        email: this.formBuilder.control('', [
          Validators.required,
          Validators.email,
        ]),
        password: this.formBuilder.control('', [
          Validators.required,
          Validators.minLength(6),
        ]),
      },
      { updateOn: 'submit' }
    );
  }

  login() {
    if (this.loginForm.valid) {
      let userLoginModel = Object.assign({}, this.loginForm.value);

      this.loginService.login(userLoginModel).subscribe(
        (response) => {
          console.log(response);
          this.router.navigateByUrl('');
          this.toastrService.success(response.message);
          localStorage.setItem('token', response.data);
        },
        (responseError) => {
          console.log(responseError);
          this.toastrService.error(responseError.error.message);
        }
      );
    }
  }
}
