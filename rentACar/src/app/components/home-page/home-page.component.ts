import { CarService } from 'src/app/services/car.service';
import { CarListModel } from 'src/app/models/carListModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  cars:CarListModel[] = [];
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCars()
  }
  getCars(){
    return this.carService.getCars().subscribe(response => {
      this.cars = response.data
    })
  }
}
