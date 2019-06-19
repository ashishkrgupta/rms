import { Injectable } from '@angular/core';
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

  constructor() { }

  getInvoices() {
    return this.invoices;
  }

  getInvoice(id: number) {
    return this.invoices.filter(inv => inv.id === id)[0];
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
