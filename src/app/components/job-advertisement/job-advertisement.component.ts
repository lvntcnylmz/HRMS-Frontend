import { JobAdvertisementService } from './../../services/job-advertisement.service';
import { JobAdvertisement } from './../../models/jobAdvertisement';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-advertisement',
  templateUrl: './job-advertisement.component.html',
  styleUrls: ['./job-advertisement.component.css']
})
export class JobAdvertisementComponent implements OnInit {

  jobAdvertisements: JobAdvertisement[] = [];
  dataLoaded = false;
  filterText = "";

  constructor(private JobAdvertisementService: JobAdvertisementService, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   this.getJobAdvertisements();
  }

  getJobAdvertisements() {
    this.JobAdvertisementService.getProducts().subscribe(response => {
      this.jobAdvertisements = response.data;
      this.dataLoaded = true;
    })
  }

}
