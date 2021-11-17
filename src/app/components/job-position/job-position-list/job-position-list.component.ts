import { JobPositionService } from './../../../services/job-position.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobPosition } from 'src/app/models/jobPosition';

@Component({
  selector: 'app-job-position-list',
  templateUrl: './job-position-list.component.html',
  styleUrls: ['./job-position-list.component.css'],
})
export class JobPositionListComponent implements OnInit {
  jobPositions: JobPosition[] = [];
  dataLoaded = false;
  filterText = '';
  currentJob: JobPosition;

  constructor(
    private jobPositionService: JobPositionService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getJobPositions();
  }

  getJobPositions() {
    this.jobPositionService.getJobPositions().subscribe((response) => {
      this.jobPositions = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentJob(currentJob: JobPosition) {
    this.currentJob = currentJob;
  }

  getCurrentJob(currentJob: JobPosition) {
    if (currentJob == this.currentJob) {
      return 'list-group-item list-group-item-action list-group-item-active list-group-item-dark';
    } else {
      return 'list-group-item list-group-item-action lislist-group-item-dark';
    }
  }
}
