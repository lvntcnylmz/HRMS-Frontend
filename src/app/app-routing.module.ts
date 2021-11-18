import { HomeComponent } from './components/home/home.component';
import { EmployerComponent } from './components/employer/employer.component';
import { JobAdvertisementComponent } from './components/job-advertisement/job-advertisement.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'jobs', component: JobAdvertisementComponent },
  { path: 'jobs/:jobId', component: JobAdvertisementComponent },
  { path: 'companies', component: EmployerComponent },
  { path: 'about', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
