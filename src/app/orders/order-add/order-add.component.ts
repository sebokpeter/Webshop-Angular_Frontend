import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order-service/order.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from 'src/app/shared/models/customer';
import { CustomerService } from 'src/app/shared/services/customer-service/customer.service';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
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
    const ord = this.orderForm.value;
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
