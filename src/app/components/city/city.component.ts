import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent implements OnInit {
  cities: City[] = [];
  dataLoaded = false;

  constructor(
    private cityService: CityService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCities();
  }

  getCities() {
    this.cityService.getCities().subscribe((response) => {
      this.cities = response.data;
      this.dataLoaded = true;
    });
  }
}
