import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/models/customer';
import { CustomerService } from 'src/app/shared/services/customer-service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  customers: Customer[];

  ngOnInit() {
    this.refresh();
  }

  delete(id: number) {
    this.customerService.deleteCustomer(id).subscribe(message => {
      this.refresh();
    })
  }

  refresh(){
    this.customerService.getCustomers().subscribe(listOfCustomers => {
      this.customers = listOfCustomers;
    });
  }
}
