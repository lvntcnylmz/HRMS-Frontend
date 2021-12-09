import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  error: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nationalId: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
    });
  }

  register() {
    if (this.registerForm.valid) {
      let jobSeekerModel = Object.assign({}, this.registerForm.value);
      this.registerService.userRegister(jobSeekerModel).subscribe(
        (response) => {
          console.log(response);
        },
        (errorResponse) => {
          this.error = true;
          console.dir(errorResponse.error.data);
          this.toastrService.error(
            errorResponse.error.data.nationalId,
            'User could not register.'
          );
        }
      );
    }
  }
}
