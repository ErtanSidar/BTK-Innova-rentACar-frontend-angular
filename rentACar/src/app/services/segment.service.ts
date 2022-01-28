import { CreateSegmentModel } from './../models/createSegmentModel';
import { Observable } from 'rxjs';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SegmentListModel } from '../models/segmentListModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class SegmentService {
  apiUrl:String="http://localhost:8080/api/segments/"
  constructor(private httpClient:HttpClient) { }

  getSegments():Observable<ListResponseModel<SegmentListModel>> {
    return this.httpClient.get<ListResponseModel<SegmentListModel>>(this.apiUrl+"getall")
  }
  
  add(segment:CreateSegmentModel):Observable<SingleResponseModel<CreateSegmentModel>> {
    return this.httpClient.post<SingleResponseModel<CreateSegmentModel>>(this.apiUrl+"add",segment)
  }

}
