import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer-service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  id: number;

  customerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl('')
  })

  constructor(private customerService: CustomerService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomerById(this.id).subscribe(cust => {
      this.customerForm.patchValue({
        firstName: cust.firstName,
        lastName: cust.lastName,
        address: cust.address,
        email: cust.email,
        phoneNumber: cust.phoneNumber
      })
    })
  }

  save() {
    const cust = this.customerForm.value;
    cust.id = this.id;
    this.customerService.updateCustomer(cust).subscribe(() => {
      this.router.navigateByUrl('/customers');
    });
  }

}
