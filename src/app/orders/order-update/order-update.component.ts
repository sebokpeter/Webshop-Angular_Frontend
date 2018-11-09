import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from 'src/app/shared/models/customer';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/shared/services/order-service/order.service';
import { CustomerService } from 'src/app/shared/services/customer-service/customer.service';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.css']
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
      debugger;
      this.custId = ord.customer.id;
      this.orderForm.patchValue({
        orderDate: ord.orderDate,
        deliveryDate: ord.deliveryDate,
        customer: ord.customer
      })
    })
  }
  
  save() {
    const ord = this.orderForm.value;
    const id = this.id;
    ord.id = id;

    const cust = new Customer();
    cust.id = this.custId;
    ord.customer = cust;

    this.orderService.updateOrder(ord).subscribe(() => this.router.navigateByUrl('/orders'));
  }

  selectedChanged(event: any) {
    this.custId = event.target.value;
    console.log(this.custId);
  }

}
