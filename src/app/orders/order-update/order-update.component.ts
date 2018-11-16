import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from 'src/app/shared/models/customer';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/shared/services/order-service/order.service';
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
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.css'],
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: DD_MM_YYYY_Format}
  ]
})
export class OrderUpdateComponent implements OnInit {

  id: number;
  custId: number;
  customers: Customer[];

  constructor(private orderService: OrderService,
              private customerService: CustomerService,
              private route: ActivatedRoute,
              private router: Router) { }

  orderForm = new FormGroup({
    orderDate: new FormControl(''),
    deliveryDate: new FormControl(''),
    customer: new FormControl('')
  })

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(custs => {
      this.customers = custs;
    });
    this.id = +this.route.snapshot.paramMap.get('id');

    this.orderService.getOrderById(this.id).subscribe(ord => {
      this.custId = ord.customer.id;
      this.orderForm.patchValue({
        orderDate: ord.orderDate,
        deliveryDate: ord.deliveryDate
      })
    })
  }
  
  save() {
    debugger;
    const orderDateObj = this.orderForm.get('orderDate').value;
    const deliveryDateObj = this.orderForm.get('deliveryDate').value;
    const ord = new Order();
    ord.orderDate = orderDateObj;
    ord.deliveryDate = deliveryDateObj;
    const id = this.id;
    ord.id = id;

    const customer = new Customer();
    customer.id = this.orderForm.get('customer').value;
    if(!customer){
      return;
    }

    ord.customer = customer;

    this.orderService.updateOrder(ord).subscribe(() => this.router.navigateByUrl('/orders'));
  }
}
