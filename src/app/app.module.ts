import { AuthInterceptor } from './interceptor/auth.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { JobAdvertisementComponent } from './components/job-advertisement/job-advertisement.component';
import { JobAdvertisementDetailComponent } from './components/job-advertisement-detail/job-advertisement-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryComponent } from './components/category/category.component';
import { JobPositionComponent } from './components/job-position/job-position.component';
import { CityComponent } from './components/city/city.component';
import { EmployerComponent } from './components/employer/employer.component';
import { JobPositionListComponent } from './components/job-position/job-position-list/job-position-list.component';
import { EmployerListComponent } from './components/employer/employer-list/employer-list.component';
import { CityListComponent } from './components/city/city-list/city-list.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { JobSeekerRegisterComponent } from './components/register/job-seeker-register/job-seeker-register.component';
import { EmployerRegisterComponent } from './components/register/employer-register/employer-register.component';
import { TermsComponent } from './components/terms/terms.component';
import { JobSeekerComponent } from './components/job-seeker/job-seeker.component';
import { EmployerDetailComponent } from './components/employer-detail/employer-detail.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EmployerProfileComponent } from './components/user-profile/employer-profile/employer-profile.component';
import { JobSeekerProfileComponent } from './components/user-profile/job-seeker-profile/job-seeker-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    JobAdvertisementComponent,
    JobAdvertisementDetailComponent,
    FooterComponent,
    CategoryComponent,
    JobPositionComponent,
    CityComponent,
    EmployerComponent,
    JobPositionListComponent,
    EmployerListComponent,
    CityListComponent,
    AboutUsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    JobSeekerRegisterComponent,
    EmployerRegisterComponent,
    TermsComponent,
    JobSeekerComponent,
    EmployerDetailComponent,
    UserProfileComponent,
    EmployerProfileComponent,
    JobSeekerProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
