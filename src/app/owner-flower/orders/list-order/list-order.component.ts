import { Component, OnInit } from '@angular/core';
import {Order} from '../../model/order.class';
import {OrdersService} from '../../service/orders.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit {
   public orders = [];
   public total = 0;
  constructor( public orderService: OrdersService) { }

  ngOnInit(): void {
    this.orders = JSON.parse(localStorage.getItem('ordersPlaced'));
    this.total = JSON.parse(localStorage.getItem('total'));

  }

}
