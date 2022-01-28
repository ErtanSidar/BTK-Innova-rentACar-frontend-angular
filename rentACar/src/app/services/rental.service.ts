import { CreateRentalModel } from './../models/createRentalModel';

import { SingleResponseModel } from './../models/singleResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalListModel } from '../models/rentalListModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl:String="http://localhost:8080/api/rentals/"
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<RentalListModel>> {
    return this.httpClient.get<ListResponseModel<RentalListModel>>(this.apiUrl+"getrentals")
  }

  add(rental:CreateRentalModel):Observable<SingleResponseModel<CreateRentalModel>>{
    return this.httpClient.post<SingleResponseModel<CreateRentalModel>>(this.apiUrl+"addIndividual",rental)
  }
}
