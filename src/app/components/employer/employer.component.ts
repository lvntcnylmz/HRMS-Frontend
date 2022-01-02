import { Employer } from './../../models/employer';
import { Component, Input, OnInit } from '@angular/core';
import { EmployerService } from 'src/app/services/employer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css'],
})
export class EmployerComponent implements OnInit {
  employers: Employer[] = [];
  employer: Employer;
  dataLoaded = false;
  currentEmployer: Employer;

  constructor(
    private employerService: EmployerService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getEmployerById(params['id']);
      }
    });
    this.getEmployers();
  }

  getEmployers() {
    this.employerService.getEmployers().subscribe((response) => {
      this.employers = response.data;
      this.dataLoaded = true;
    });
  }

  getEmployerById(id: number) {
    this.employerService.getEmployerById(id).subscribe((reponse) => {
      this.employer = reponse.data;
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
      return 'list-group-item list-group-item-action list-group-item-dark';
    }
  }
}
