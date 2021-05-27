import {Component, OnInit} from '@angular/core';
import {OrdersService} from '../../../../service/orders.service';
import {UserService} from '../../../../service/user.service';
import {Order} from '../../../../model/order.class';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit {
  public orders: any[] = [];
  isLoginSuccess: boolean;
  constructor(public orderService: OrdersService, public userService: UserService) {
  }

  ngOnInit(): void {
    this.orders = this.orderService.getDataOrder();
    this.isLoginSuccess = this.userService.getIsLogin();
  }

}
