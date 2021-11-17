import { JobAdvertisementDetailComponent } from './components/job-advertisement-detail/job-advertisement-detail.component';
import { EmployerComponent } from './components/employer/employer.component';
import { JobAdvertisementComponent } from './components/job-advertisement/job-advertisement.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: JobAdvertisementDetailComponent },
  { path: 'jobs', component: JobAdvertisementComponent },
  { path: 'companies', component: EmployerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
