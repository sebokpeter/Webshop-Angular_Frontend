import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order-service/order.service';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  constructor(private orderService: OrderService,
              private route: ActivatedRoute) { }

  currentOrder: Order;

  ngOnInit() {
    this.getOrder();
  }

  getOrder() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.orderService.getOrderById(id).subscribe(ord => {
      this.currentOrder = ord;
    });
  }
}
