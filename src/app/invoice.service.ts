import { Injectable } from '@angular/core';
import { Invoice } from './invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  invoices: Invoice[] = [];

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
