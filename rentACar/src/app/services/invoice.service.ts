import { HttpClient } from '@angular/common/http';
import { InvoiceListModel } from './../models/invoiceListModel';
import { SingleResponseModel } from './../models/singleResponseModel';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  apiUrl:String="http://localhost:8080/api/invoices/get-invoice-individual-customer/"
  constructor(private httpClient:HttpClient) { }

  getInvoice():Observable<SingleResponseModel<InvoiceListModel>> {
    return this.httpClient.get<SingleResponseModel<InvoiceListModel>>(this.apiUrl+"getall")
  }
}
