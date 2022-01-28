import { CityService } from './../../services/city.service';
import { Component, OnInit } from '@angular/core';
import { CityListModel } from 'src/app/models/cityListModel';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  cities:CityListModel[]=[]
  constructor(private cityService:CityService) { }

  ngOnInit(): void {
    this.getCities()
  }

  getCities() {
    this.cityService.getCities().subscribe(response=>{
      this.cities=response.data
    })
  }

}
