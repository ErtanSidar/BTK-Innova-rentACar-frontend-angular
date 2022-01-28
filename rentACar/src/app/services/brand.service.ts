import { ResponseModel } from './../models/responseModel';
import { SingleResponseModel } from './../models/singleResponseModel';
import { BrandListModel } from './../models/brandListModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl:String="http://localhost:8080/api/brands/"
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<BrandListModel>> {
    return this.httpClient.get<ListResponseModel<BrandListModel>>(this.apiUrl+"getall")
  }

  add(brand:BrandListModel):Observable<SingleResponseModel<BrandListModel>>{
    return this.httpClient.post<SingleResponseModel<BrandListModel>>(this.apiUrl+"add",brand)
  }
  delete(id: number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl + 'delete/' + id);
  }
}
