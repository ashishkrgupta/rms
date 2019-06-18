import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {

  invoices: Invoice[] = [];
  columnsToDisplay = ['id', 'customerName', 'contactNo', 'invoiceDate', 'total'];

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.invoices = this.invoiceService.getInvoices();
  }

}
