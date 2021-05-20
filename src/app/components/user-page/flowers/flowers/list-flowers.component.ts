import {Component, OnInit, ViewChild} from '@angular/core';
import {Flower} from '../../../../model/flower.class';
import {FlowersService} from '../../../../service/flowers.service';
import {CartService} from '../../../../service/cart-service.service';
import {OrdersService} from '../../../../service/orders.service';

@Component({
  selector: 'app-flowers',
  templateUrl: './list-flowers.component.html',
  styleUrls: ['./list-flowers.component.scss']
})
export class FlowersComponent implements OnInit {
  public listFlowers: Flower[];
  isDisabledCartButton;
  constructor(public flowersService: FlowersService, public cartService: CartService, public ordersService: OrdersService ) { }

  ngOnInit(): void {
    this.getListFlower();
  }
  getListFlower(): void {
    const dataOrder = this.ordersService.ordersPaid;
    if (dataOrder != null){
      this.listFlowers = this.ordersService.onChangeDataFlower();
    }else {
      this.listFlowers = this.flowersService.getListFlower();
    }
  }
  addToCart(flower: Flower): void {
    this.cartService.addToCart(flower);
  }
}
