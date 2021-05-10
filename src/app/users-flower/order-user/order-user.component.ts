import { Component, OnInit } from '@angular/core';
import {OrdersComponent} from '../../owner-flower/orders/orders.component';
import {OrdersService} from '../../owner-flower/service/orders.service';
@Component({
  selector: 'app-order-user',
  templateUrl: './order-user.component.html',
  styleUrls: ['./order-user.component.scss']
})
export class OrderUserComponent implements OnInit {
  public orders = [];
  public total = 0;
  constructor( public orderService: OrdersService) { }

  ngOnInit(): void {
    this.orders = JSON.parse(localStorage.getItem('ordersPlaced'));
    this.total = JSON.parse(localStorage.getItem('total'));

  }

}
