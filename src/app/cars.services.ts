import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CarsServices {
  constructor( private http: HttpClient) {
  }
  getCars() {
    return this.http.get('http://localhost:3000/cars');
  }
  addCar(carName: string, colorCar: string) {
    const data = {
      name: carName,
      color: colorCar
    };
    return this.http.post('http://localhost:3000/cars', data);
  }
  deleteCar(car) {
    return this.http.delete(`http://localhost:3000/cars/${car.id}`);
  }
  changeColor(car, color: string) {
    car.color = color;
    return this.http.put(`http://localhost:3000/cars/${car.id}`, car);
  }
}
