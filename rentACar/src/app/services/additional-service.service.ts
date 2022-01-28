import { AdditionalServiceListModel } from './../models/additionalServiceListModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AdditionalServiceService {
  apiUrl:String="http://localhost:8080/api/additionalservices/"
  constructor(private httpClient:HttpClient) { }

  getAdditionalServices():Observable<ListResponseModel<AdditionalServiceListModel>> {
    return this.httpClient.get<ListResponseModel<AdditionalServiceListModel>>(this.apiUrl+"getall")
  }

}
