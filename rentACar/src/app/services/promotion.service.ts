import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatePromotionModel } from '../models/createPromotionModel';
import { ListResponseModel } from '../models/listResponseModel';
import { PromotionListModel } from '../models/promotionListModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  apiUrl:string="http://localhost:8080/api/promotions/"
  constructor(private hhtpClient:HttpClient) { }

  getPromotions():Observable<ListResponseModel<PromotionListModel>> {
    return this.hhtpClient.get<ListResponseModel<PromotionListModel>>(this.apiUrl+"getall")
  }

  add(promotion:CreatePromotionModel):Observable<SingleResponseModel<CreatePromotionModel>> {
    return this.hhtpClient.post<SingleResponseModel<CreatePromotionModel>>(this.apiUrl+"add",promotion)
  }
}
