import { ResponseModel } from './../models/responseModel';
import { SingleResponseModel } from './../models/singleResponseModel';
import { ColorListModel } from 'src/app/models/colorListModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl:String="http://localhost:8080/api/colors/"
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<ColorListModel>> {
    return this.httpClient.get<ListResponseModel<ColorListModel>>(this.apiUrl+"getall")
  }

  add(color:ColorListModel):Observable<SingleResponseModel<ColorListModel>>{
    return this.httpClient.post<SingleResponseModel<ColorListModel>>(this.apiUrl+"add",color)
  }
  delete(id: number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl + 'delete/' + id);
  }
}
