import { Employer } from 'src/app/models/employer';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-profile',
  templateUrl: './employer-profile.component.html',
  styleUrls: ['./employer-profile.component.css'],
})
export class EmployerProfileComponent implements OnInit {
  @Input() employer: Employer;

  constructor() {}

  ngOnInit(): void {}
}
