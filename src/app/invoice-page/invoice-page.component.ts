import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, switchMap } from 'rxjs/operators';

import { InvoiceDataModel } from '../intefaces/invoice.inteface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-invoice-page',
  templateUrl: './invoice-page.component.html',
  styleUrls: ['./invoice-page.component.scss']
})
export class InvoicePageComponent implements OnInit {

  invoiceData: InvoiceDataModel;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.route.queryParams
      .pipe(
        filter(res => Boolean(res)),
        switchMap(params => this.apiService.getInvoice(params.dataid))
      )
      .subscribe((invoice) => {
        this.invoiceData = invoice;
      })
  }

  ngOnInit(): void {
  }

  getSubTotal(): number {
    return this.invoiceData.transaction.invoice.subtotal
      ? this.invoiceData.transaction.invoice.subtotal
      : this.invoiceData.transaction.subtotal
  }

  getTax(): number {
    return this.invoiceData.transaction.invoice.tax
      ? this.invoiceData.transaction.invoice.tax
      : this.invoiceData.transaction.tax
  }

  getTotal(): number {
    return this.invoiceData.transaction.invoice.amount
      ? this.invoiceData.transaction.invoice.amount
      : this.invoiceData.transaction.amount
  }

  getInvoicePaymentTerms(): number {
    return parseInt(this.invoiceData.orgSettings.invoicePaymentTerms);
  }
}
