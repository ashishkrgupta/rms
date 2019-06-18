import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatCardModule, MatMenuModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatTableModule, MatInputModule, MatPaginatorModule, MatSortModule } from  '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { InvoiceCreateComponent } from './invoice-create/invoice-create.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceListComponent,
    InvoiceDetailComponent,
    InvoiceCreateComponent,
    DashboardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }