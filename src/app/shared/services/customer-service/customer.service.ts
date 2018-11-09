import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://ipcsmmd-webshop-group16.azurewebsites.net/api/customers";

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.apiUrl + '/' + id);
  }

  updateCustomer(cust: Customer): Observable<Customer> {
    const id = cust.id;
    return this.http.put<Customer>(this.apiUrl + '/' + id, cust);
  }

  addCustomer(cust: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, cust);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
