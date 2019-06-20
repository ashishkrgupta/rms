import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpoints } from '../environments/environment'
import { Invoice } from './invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  invoices: Invoice[] = [
    new Invoice(1,'Ashish', '1234567890', new Date(), 1234.56),
    new Invoice(1,'Ashish', '1234567890', new Date(), 1234.56),
    new Invoice(1,'Ashish', '1234567890', new Date(), 1234.56),
    new Invoice(1,'Ashish', '1234567890', new Date(), 1234.56),
    new Invoice(1,'Ashish', '1234567890', new Date(), 1234.56),
    new Invoice(1,'Ashish', '1234567890', new Date(), 1234.56),
    new Invoice(1,'Ashish', '1234567890', new Date(), 1234.56),
    new Invoice(1,'Ashish', '1234567890', new Date(), 1234.56),
    new Invoice(1,'Ashish', '1234567890', new Date(), 1234.56),
    new Invoice(1,'Ashish', '1234567890', new Date(), 1234.56),
    new Invoice(1,'Ashish', '1234567890', new Date(), 1234.56),
    new Invoice(1,'Ashish', '1234567890', new Date(), 1234.56),
    new Invoice(1,'Ashish', '1234567890', new Date(), 1234.56),
    new Invoice(1,'Ashish', '1234567890', new Date(), 1234.56)
  ];

  constructor(private httpClient: HttpClient) { }

  getInvoices() {
    //return this.invoices;
    return this.httpClient.get<Invoice[]>(endpoints.invoiceservice.list);
  }

  getInvoice(id: number) {
    //return this.invoices.filter(inv => inv.id === id)[0];
    return this.httpClient.get<Invoice>(endpoints.invoiceservice.find + id);
  }

  saveInvoice(invoice: Invoice) {
    let existingInv = this.invoices.filter(inv => inv.id === invoice.id)[0];
    //this.invoices.splice(existingInv);
    this.invoices.push(invoice);
  }

  createInvoice(invoice: Invoice) {
    this.invoices.push(invoice);
  }
}
