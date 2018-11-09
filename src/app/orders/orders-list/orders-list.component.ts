import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order-service/order.service';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  orders: Order[];

  ngOnInit() {
    this.refresh();
  }

  delete(id: number) {
    this.orderService.deleteOrder(id).subscribe(() => {
      this.refresh();
    });
  }

  refresh() {
    this.orderService.getOrders().subscribe(ordList => {
      this.orders = ordList;
    });
  }

}
