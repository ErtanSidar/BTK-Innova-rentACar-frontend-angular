import { CarListModel } from 'src/app/models/carListModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { CreateCarModel } from '../models/createCarModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl:String="http://localhost:8080/api/cars/"
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarListModel>> {
    return this.httpClient.get<ListResponseModel<CarListModel>>(this.apiUrl+"getall")
  }

  getCarById(id:number):Observable<SingleResponseModel<CarListModel>> {
    return this.httpClient.get<SingleResponseModel<CarListModel>>(this.apiUrl+"findById/"+id)
  }

  add(car:CreateCarModel):Observable<SingleResponseModel<CreateCarModel>>{
    return this.httpClient.post<SingleResponseModel<CreateCarModel>>(this.apiUrl+"add",car)
  }
}
