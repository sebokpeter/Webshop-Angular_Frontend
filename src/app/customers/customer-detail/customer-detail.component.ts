import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/models/customer';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/shared/services/customer-service/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  currentCustomer: Customer;

  constructor(private customerService: CustomerService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCustomer();
  }

  getCustomer() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomerById(id).subscribe(cust => {
      this.currentCustomer = cust;
    })
  }

}
