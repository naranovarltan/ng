import { Component } from '@angular/core';
import { CarsServices } from './cars.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  colors = [
    'red',
    'blue',
    'green',
    'black',
    'yellow',
    'grey',
    'aqua'
  ];
  cars = [];
  carName = '';
  colorCar = '';

  constructor(private carService: CarsServices) {}

  loadCars() {
    this.carService
      .getCars()
      .subscribe((response: any) => {
        this.cars = response;
      });
  }
  addCar() {
    this.carService
      .addCar(this.carName, this.colorCar)
      .subscribe((car) => {
        this.cars.push(car);
      });
    this.carName = '';
    this.colorCar = '';
  }
  deleteCar(car) {
    this.carService
      .deleteCar(car)
      .subscribe(() => {
      this.cars = this.cars.filter( c => c.id !== car.id);
      });
  }
  getRandColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[num];
  }
  setNewColor(car) {
    this.carService
      .changeColor(car, this.getRandColor())
      .subscribe();
  }
}
