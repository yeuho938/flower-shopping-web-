import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../../owner-flower/service/orders.service';

@Component({
  selector: 'app-order-detail-user',
  templateUrl: './order-detail-user.component.html',
  styleUrls: ['./order-detail-user.component.scss']
})
export class OrderDetailUserComponent implements OnInit {

  public orders = [];
  public total = 0;
  constructor( public orderService: OrdersService) { }

  ngOnInit(): void {
    this.orders = JSON.parse(localStorage.getItem('ordersPlaced'));
    this.total = JSON.parse(localStorage.getItem('total'));

  }
}
