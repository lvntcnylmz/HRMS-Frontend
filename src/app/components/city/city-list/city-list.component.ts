import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css'],
})
export class CityListComponent implements OnInit {
  cities: City[] = [];
  dataLoaded = false;
  currentCity: City;

  constructor(
    private cityService: CityService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getCityById(params['id']);
      } else {
        this.getCities();
      }
    });
    this.getCities();
  }

  getCities() {
    this.cityService.getCities().subscribe((response) => {
      this.cities = response.data;
      this.dataLoaded = true;
    });
  }

  getCityById(cityId: number) {
    this.cityService.getCityById(cityId).subscribe((response) => {
      this.cities = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentCity(currentCity: City) {
    this.currentCity = currentCity;
    console.log(currentCity);
  }

  getCurrentCity(currentCity: City) {
    if (currentCity == this.currentCity) {
      return 'list-group-item list-group-item-action list-group-item-active list-group-item-dark';
    } else {
      return 'list-group-item list-group-item-action lislist-group-item-dark';
    }
  }

  getAllCityClass() {
    if (!this.currentCity) {
      return 'list-group-item list-group-item-action list-group-item-active list-group-item-dark';
    } else {
      return 'list-group-item list-group-item-action lislist-group-item-dark';
    }
  }
}
