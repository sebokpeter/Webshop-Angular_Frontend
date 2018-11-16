import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../../models/order';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(environment.apiUrl + 'orders');  
  }

  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(environment.apiUrl + 'orders/' + id);
  }

  updateOrder(ord: Order): Observable<any> {
    const id = ord.id;
    return this.http.put(environment.apiUrl + 'orders/' + id, ord, {responseType: 'text'});
  }

  addOrder(ord: Order): Observable<any> {
    return this.http.post(environment.apiUrl + 'orders', ord, {responseType:'text'});
  }

  deleteOrder(id: number): Observable<any>  {
    return this.http.delete(environment.apiUrl + 'orders/' + id, {responseType: 'text'});
  }
}
