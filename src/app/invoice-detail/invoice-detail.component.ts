import { Component, OnInit } from '@angular/core';
import {InvoiceService} from '../invoice.service';
import {Invoice} from '../invoice'
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss']
})
export class InvoiceDetailComponent implements OnInit {

  constructor(private invoiceService: InvoiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.invoice  = this.invoiceService.getInvoice(parseInt(this.route.snapshot.paramMap.get("id")));
    //console.log(this.invoice);
    // this.invoiceService.getInvoice(1).subscribe((invoice: Invoice) => {
    //   this.invoice = invoice;
    //   console.log(invoice);
    // })
  }

}
