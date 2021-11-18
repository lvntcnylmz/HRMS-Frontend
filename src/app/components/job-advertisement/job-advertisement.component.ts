import { JobPositionService } from 'src/app/services/job-position.service';
import { JobAdvertisementService } from './../../services/job-advertisement.service';
import { JobAdvertisement } from './../../models/jobAdvertisement';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-advertisement',
  templateUrl: './job-advertisement.component.html',
  styleUrls: ['./job-advertisement.component.css'],
})
export class JobAdvertisementComponent implements OnInit {
  jobAdvertisements: JobAdvertisement[] = [];
  dataLoaded = false;
  filterText = '';

  constructor(
    private JobAdvertisementService: JobAdvertisementService,
    private activatedRoute: ActivatedRoute,
    private jobPositionService: JobPositionService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['jobId']) {
        this.getJobAdvertisementByJobId(params['jobId']);
      } else {
        this.getJobAdvertisements();
      }
    });
    this.getJobAdvertisements();
  }

  getJobAdvertisements() {
    this.JobAdvertisementService.getJobAdvertisements().subscribe(
      (response) => {
        this.jobAdvertisements = response.data;
        this.dataLoaded = true;
      }
    );
  }

  getJobAdvertisementByJobId(jobId: number) {
    this.JobAdvertisementService.getJObAdvertisementByJobPositionId(
      jobId
    ).subscribe((response) => {
      this.jobAdvertisements = response.data;
      this.dataLoaded = true;
    });
  }
}
