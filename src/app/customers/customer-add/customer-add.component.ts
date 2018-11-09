import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer-service/customer.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  constructor(private customerService: CustomerService,
              private router: Router) { }

  customerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl('')
  })

  ngOnInit() {
  }

  save() {
    const cust = this.customerForm.value;
    this.customerService.addCustomer(cust).subscribe(() => {
      this.router.navigateByUrl('/customers');
    })
  }

}
