import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-employer-register',
  templateUrl: './employer-register.component.html',
  styleUrls: ['./employer-register.component.css'],
})
export class EmployerRegisterComponent implements OnInit {
  employerRegisterForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.employerRegisterForm = this.formBuilder.group(
      {
        companyName: this.formBuilder.control('', Validators.required),
        website: this.formBuilder.control('', Validators.required),
        email: this.formBuilder.control('', [
          Validators.required,
          Validators.email,
        ]),
        password: this.formBuilder.control('', [
          Validators.required,
          Validators.minLength(6),
        ]),

        phoneNumber: this.formBuilder.control('', [
          Validators.required,
          Validators.minLength(13),
          Validators.maxLength(13),
        ]),
        termsOfService: this.formBuilder.control(
          false,
          Validators.requiredTrue
        ),
      },
      { updateOn: 'submit' }
    );
  }

  register() {
    if (this.employerRegisterForm.valid) {
      let jobSeekerModel = Object.assign({}, this.employerRegisterForm.value);
      this.registerService.employerRegister(jobSeekerModel).subscribe(
        (response) => {
          console.log(response);
        },
        (errorResponse) => {
          console.dir(errorResponse);
          this.toastrService.error(
            errorResponse.error.message,
            'User could not register.'
          );
        }
      );
    }
  }
}
