import { Component, OnInit } from '@angular/core';
import {InvoiceService} from '../invoice.service';
import {Invoice} from '../invoice'
import { ActivatedRoute } from "@angular/router";
import { Product } from '../product';
import { FormControl, Validators } from '../../../node_modules/@angular/forms';
import { DatePipe } from '@angular/common';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.scss'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ja-JP'},
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class InvoiceCreateComponent implements OnInit {

  invoice: Invoice;
  productColumnsToDisplay: string[] = ['srNo', 'productName', 'rate', 'quantity', 'price'];
  date: FormControl = new FormControl(new Date(), Validators.required);

  constructor(private invoiceService: InvoiceService, private route: ActivatedRoute, private _adapter: DateAdapter<any>) { }

  ngOnInit() {
    this._adapter.setLocale('fr');
    let isCreate = this.route.snapshot.routeConfig.path.indexOf("new-invoice") >= 0;
    if (isCreate) {
      console.log("create invoice page");
      this.invoice = new Invoice();
      this.invoice.items = [new Product()];
    } else {
      console.log("edit invoice page");
      this.invoice  = this.invoiceService.getInvoice(parseInt(this.route.snapshot.paramMap.get("id")));
    }
  }

}
