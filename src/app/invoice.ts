import { Product } from './product';

export class Invoice {

    id: number;
    customerName: string;
    total: number;
    invoiceDate: Date;
    contactNo: string;
    items: Product[];

    constructor (id: number, customerName: string, contactNo: string, invoiceDate: Date, total: number) {
        this.id = id;
        this.customerName = customerName;
        this.contactNo = contactNo;
        this.total = total;
        this.invoiceDate = invoiceDate;
    }
}
