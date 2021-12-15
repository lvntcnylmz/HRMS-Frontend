import { JobSeekerService } from './../../services/job-seeker.service';
import { JobSeeker } from './../../models/jobSeeker';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-seeker',
  templateUrl: './job-seeker.component.html',
  styleUrls: ['./job-seeker.component.css'],
})
export class JobSeekerComponent implements OnInit {
  jobSeekers: JobSeeker[] = [];
  dataLoaded = false;
  date: number = new Date().getFullYear();

  constructor(private jobSeekerService: JobSeekerService) {}

  ngOnInit(): void {
    this.getJobSeekers();
  }

  getJobSeekers() {
    this.jobSeekerService.getJobSeekers().subscribe((response) => {
      this.jobSeekers = response.data;
      this.dataLoaded = true;
    });
  }
}
