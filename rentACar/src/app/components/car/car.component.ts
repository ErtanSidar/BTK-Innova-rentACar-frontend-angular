import { Component, OnInit } from '@angular/core';
import { CarListModel } from 'src/app/models/carListModel';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:CarListModel[]=[]
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCars()
  }

  getCars() {
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
    })
  }
}
