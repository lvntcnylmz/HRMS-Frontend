import { Employer } from './../../models/employer';
import { Component, OnInit } from '@angular/core';
import { EmployerService } from 'src/app/services/employer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css'],
})
export class EmployerComponent implements OnInit {
  employers: Employer[] = [];
  dataLoaded = false;
  currentEmployer: Employer;

  constructor(
    private employerService: EmployerService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getEmployers();
  }

  getEmployers() {
    this.employerService.getEmployers().subscribe((response) => {
      this.employers = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentEmployer(currentEmployer: Employer) {
    this.currentEmployer = currentEmployer;
  }

  getCurrentEmployer(currentEmployer: Employer) {
    if (currentEmployer == this.currentEmployer) {
      return 'list-group-item list-group-item-action list-group-item-active list-group-item-dark';
    } else {
      return 'list-group-item list-group-item-action lislist-group-item-dark';
    }
  }
}
