import {Component, OnInit} from '@angular/core';
import {OrdersService} from '../../../../service/orders.service';
import {UserService} from '../../../../service/user.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit {
  public orders = [];
  public totalPrice = 0;
  isLoginSuccess: boolean;
  constructor(public orderService: OrdersService, public userService: UserService) {
  }

  ngOnInit(): void {
    this.orders = JSON.parse(localStorage.getItem('purchasedOrders'));
    this.totalPrice = JSON.parse(localStorage.getItem('totalPriceCart'));
    this.isLoginSuccess = this.userService.isLoginSuccess;
  }

}
