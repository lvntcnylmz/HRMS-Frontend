import { ActivatedRoute } from '@angular/router';
import { Employer } from './../../models/employer';
import { Component, OnInit } from '@angular/core';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-employer-detail',
  templateUrl: './employer-detail.component.html',
  styleUrls: ['./employer-detail.component.css'],
})
export class EmployerDetailComponent implements OnInit {
  employer: Employer;

  constructor(
    private emloyerService: EmployerService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getEmployerById(params['id']);
      }
    });
  }

  getEmployerById(userId: number) {
    this.emloyerService.getEmployerById(userId).subscribe((response) => {
      this.employer = response.data;
      console.log(response.data);
    });
  }
}
