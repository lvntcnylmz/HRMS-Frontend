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
    this.registerForm = this.formBuilder.group(
      {
        email: this.formBuilder.control('', [
          Validators.required,
          Validators.email,
        ]),
        password: this.formBuilder.control('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        firstName: this.formBuilder.control('', Validators.required),
        lastName: this.formBuilder.control('', Validators.required),
        nationalId: this.formBuilder.control('', [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ]),
        yearOfBirth: this.formBuilder.control('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4),
        ]),
      },
      { updateOn: 'submit' }
    );
  }

  register() {
    if (this.registerForm.valid) {
      let jobSeekerModel = Object.assign({}, this.registerForm.value);
      this.registerService.userRegister(jobSeekerModel).subscribe(
        (response) => {
          console.log(response);
          this.error = false;
        },
        (errorResponse) => {
          console.dir(errorResponse);
          this.error = true;
          this.toastrService.error(
            errorResponse.error.message,
            'User could not register.'
          );
        }
      );
    }
  }
}
