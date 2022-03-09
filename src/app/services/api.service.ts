import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { InvoiceDataModel } from '../intefaces/invoice.inteface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  path = 'https://bothworlds-norder-invoicegenerator.azurewebsites.net/api/GetInvoiceData';

  constructor(private http: HttpClient) {}

  getInvoice(dataid: string): Observable<InvoiceDataModel> {
    return this.http.get<InvoiceDataModel>(
      this.path,
      { params: { dataid } }
    )
  }
}
