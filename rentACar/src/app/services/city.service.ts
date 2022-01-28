import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityListModel } from '../models/cityListModel';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  apiUrl:String="http://localhost:8080/api/cities/"
  constructor(private httpClient:HttpClient) { }

  getCities():Observable<ListResponseModel<CityListModel>> {
    return this.httpClient.get<ListResponseModel<CityListModel>>(this.apiUrl+"getall")
  }
}
