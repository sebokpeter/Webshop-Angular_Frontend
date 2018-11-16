import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../../models/customer';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(environment.apiUrl + 'customers');
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(environment.apiUrl + 'customers/' + id);
  }

  updateCustomer(cust: Customer): Observable<Customer> {
    const id = cust.id;
    return this.http.put<Customer>(environment.apiUrl + 'customers/' + id, cust);
  }

  addCustomer(cust: Customer): Observable<Customer> {
    return this.http.post<Customer>(environment.apiUrl + 'customers', cust);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(environment.apiUrl + 'customers/' + id);
  }
}
