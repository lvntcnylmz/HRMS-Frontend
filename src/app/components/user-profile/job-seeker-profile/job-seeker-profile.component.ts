import { JobSeeker } from 'src/app/models/jobSeeker';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-seeker-profile',
  templateUrl: './job-seeker-profile.component.html',
  styleUrls: ['./job-seeker-profile.component.css'],
})
export class JobSeekerProfileComponent implements OnInit {
  @Input() jobSeeker: JobSeeker;

  constructor() {}

  ngOnInit(): void {
    this.jobSeeker;
  }
}
