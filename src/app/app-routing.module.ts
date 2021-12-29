import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EmployerDetailComponent } from './components/employer-detail/employer-detail.component';
import { JobSeekerComponent } from './components/job-seeker/job-seeker.component';
import { TermsComponent } from './components/terms/terms.component';
import { JobAdvertisementDetailComponent } from './components/job-advertisement-detail/job-advertisement-detail.component';
import { HomeComponent } from './components/home/home.component';
import { EmployerComponent } from './components/employer/employer.component';
import { JobAdvertisementComponent } from './components/job-advertisement/job-advertisement.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'jobs', component: JobAdvertisementComponent },
  { path: 'jobs/:id', component: JobAdvertisementComponent },
  { path: 'jobs/:id/detail', component: JobAdvertisementDetailComponent },
  { path: 'cities/:id', component: JobAdvertisementComponent },
  {
    path: 'companies',
    component: EmployerComponent,
    canActivate: [LoginGuard],
  },
  { path: 'companies/:id', component: EmployerDetailComponent },
  {
    path: 'candidates',
    component: JobSeekerComponent,
    canActivate: [LoginGuard],
  },
  { path: 'about', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'termsofservice', component: TermsComponent },
  { path: 'account', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
