import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-job-seeker-register',
  templateUrl: './job-seeker-register.component.html',
  styleUrls: ['./job-seeker-register.component.css'],
})
export class JobSeekerRegisterComponent implements OnInit {
  jobSeekerRegisterForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.jobSeekerRegisterForm = this.formBuilder.group(
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
        dateOfBirth: this.formBuilder.control('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4),
        ]),
        termsOfService: this.formBuilder.control(
          false,
          Validators.requiredTrue
        ),
      },
      { updateOn: 'submit' }
    );
  }

  jobSeekerRegister() {
    if (this.jobSeekerRegisterForm.valid) {
      let jobSeekerModel = Object.assign({}, this.jobSeekerRegisterForm.value);
      this.registerService.jobSeekerRegister(jobSeekerModel).subscribe(
        (response) => {
          if (response.success) {
            console.log(response);
            this.toastrService.success(response.message);
          } else {
            console.log(response);
            this.toastrService.error(response.message);
          }
        },
        (responseError) => {
          console.dir(responseError);
          this.toastrService.error(
            responseError.error.message,
            'User could not register.'
          );
        }
      );
    }
  }
}
