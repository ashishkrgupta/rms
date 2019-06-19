import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InvoiceListComponent} from './invoice-list/invoice-list.component'
import {InvoiceDetailComponent} from './invoice-detail/invoice-detail.component'
import {InvoiceCreateComponent} from './invoice-create/invoice-create.component'
import {DashboardComponent} from './dashboard/dashboard.component'

const routes: Routes = [
  { path : "", component : DashboardComponent},
  { path : "invoices", component : InvoiceListComponent},
  { path : "invoices/:id", component : InvoiceDetailComponent},
  { path : "new-invoice", component : InvoiceCreateComponent},
  { path : "edit-invoice", component : InvoiceCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
