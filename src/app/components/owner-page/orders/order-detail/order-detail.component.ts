import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OrdersService} from '../../../../service/orders.service';
import {UserService} from '../../../../service/user.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  public orders = [];
  public totalOrder = 0;
  isLoginSuccess: boolean;
  constructor(public activatedRoute: ActivatedRoute, public orderService: OrdersService, public userService: UserService) {
  }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder(): void {
    const id = (+this.activatedRoute.snapshot.params.id);
    this.orders = this.orderService.getOrderById(id);
    this.totalOrder = JSON.parse(localStorage.getItem('totalPriceCart'));
    this.isLoginSuccess = this.userService.getIsLogin();
  }
}
