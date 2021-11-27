import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { EmployerComponent } from './components/employer/employer.component';
import { JobAdvertisementComponent } from './components/job-advertisement/job-advertisement.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'jobs',
    component: JobAdvertisementComponent,
  },
  { path: 'jobs', component: CategoryComponent },
  { path: 'jobs/:jobId', component: JobAdvertisementComponent },
  { path: 'companies', component: EmployerComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
