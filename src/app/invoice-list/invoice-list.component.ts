import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {

  invoices: MatTableDataSource<Invoice> = new MatTableDataSource();
  columnsToDisplay = ['id', 'customerName', 'contactNo', 'invoiceDate', 'total'];

  constructor(private invoiceService: InvoiceService, private router: Router) { }

  ngOnInit() {
    //this.invoices = this.invoiceService.getInvoices();
    this.invoiceService.getInvoices().subscribe((invoices: Invoice[]) => {
      this.invoices.data = invoices;
      console.log(invoices);
    })
  }

  invoiceDetail(row: any) {
    console.log(row);
    this.router.navigate(['/invoices/' + row.id]);
  }

}
