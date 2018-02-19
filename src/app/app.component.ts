import { Component } from '@angular/core';
import { CarsServices } from './cars.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  cars = [];

  constructor(private carService: CarsServices) {}

  loadCars() {
    this.carService
      .getCars()
      .subscribe((response: any) => {
        this.cars = response;
      });
  }
}
