import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OrdersService} from '../../service/orders.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  public orders = [];
  constructor( public activatedRoute: ActivatedRoute, public orderService: OrdersService) { }

  ngOnInit(): void {
   this.getOrder();
  }
  getOrder(): void{
    const id = (+this.activatedRoute.snapshot.params.id);
    this.orders = this.orderService.getOrderById(id);
  }
}
