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

  constructor(
    private employerService: EmployerService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCities();
  }

  getCities() {
    this.employerService.getCities().subscribe((response) => {
      this.employers = response.data;
      this.dataLoaded = true;
    });
  }
}
