import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatePaymentModel } from '../models/createPaymentModel';
import { ListResponseModel } from '../models/listResponseModel';
import { PaymentListModel } from '../models/paymentListModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  apiUrl:string="http://localhost:8080/api/payments/"
  constructor(private httpClient:HttpClient) { }

  getPayments():Observable<ListResponseModel<PaymentListModel>> {
    return this.httpClient.get<ListResponseModel<PaymentListModel>>(this.apiUrl+"getall")
  }

  add(payment:CreatePaymentModel):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",payment)
  }
}
