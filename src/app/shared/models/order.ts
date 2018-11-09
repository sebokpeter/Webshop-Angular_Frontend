import { Customer } from "./customer";

export class Order{
    id: number;
    orderDate: Date;
    deliveryDate: Date;
    customer: Customer;
}