import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order-service/order.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from 'src/app/shared/models/customer';
import { CustomerService } from 'src/app/shared/services/customer-service/customer.service';
import { MAT_DATE_FORMATS } from '@angular/material';
import { Order } from 'src/app/shared/models/order';

export const DD_MM_YYYY_Format = {
  parse: {
      dateInput: 'LL',
  },
  display: {
      dateInput: 'DD/MM/YYYY',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css'],
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: DD_MM_YYYY_Format}
  ]
})
export class OrderAddComponent implements OnInit {
  
  constructor(private orderService: OrderService,
              private customerService: CustomerService,
             private router: Router) { }

  customers: Customer[];
  custId: number;

  orderForm = new FormGroup({
    orderDate: new FormControl(''),
    deliveryDate: new FormControl(''),
    customer: new FormControl('')
  })

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(custs => {
      this.customers = custs;
      this.custId = this.customers[0].id;
    });
  }
  
  save() {
    debugger;
    const orderDateObj = this.orderForm.get('orderDate').value;
    const deliveryDateObj = this.orderForm.get('deliveryDate').value;
    const ord = new Order();
    ord.deliveryDate = deliveryDateObj;
    ord.orderDate = orderDateObj;
    
    const cust = new Customer();
    cust.id = this.custId;
    ord.customer = cust;
    this.orderService.addOrder(ord).subscribe(() => {
      this.router.navigateByUrl("/orders");
    })
  }

  selectedChanged(event: any) {
    this.custId = event.target.value;
    console.log(this.custId);
  }
}
