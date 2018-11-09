import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl = "https://ipcsmmd-webshop-group16.azurewebsites.net/api/orders";

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(this.apiUrl);  
  }

  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(this.apiUrl + '/' + id);
  }

  updateOrder(ord: Order): Observable<any> {
    const id = ord.id;
    return this.http.put(this.apiUrl + '/' + id, ord, {responseType: 'text'});
  }

  addOrder(ord: Order): Observable<any> {
    return this.http.post(this.apiUrl, ord, {responseType:'text'});
  }

  deleteOrder(id: number): Observable<any>  {
    return this.http.delete(this.apiUrl + '/' + id, {responseType: 'text'});
  }
}
