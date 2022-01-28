import { CarListModel } from 'src/app/models/carListModel';
import { CarService } from 'src/app/services/car.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  id!:number;
  car!:CarListModel
  constructor(private activedRoute:ActivatedRoute, private carService:CarService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(param => {
      this.id = param["carId"]
  
    })
    this.getCarById()
  }

  getCarById() {
    this.carService.getCarById(this.id).subscribe(response=>{
      this.car=response.data
    })
  }

}
