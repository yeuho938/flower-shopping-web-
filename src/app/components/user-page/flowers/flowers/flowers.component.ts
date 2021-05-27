import {Component, OnInit, ViewChild} from '@angular/core';
import {Flower} from '../../../../model/flower.class';
import {FlowersService} from '../../../../service/flowers.service';
import {CartService} from '../../../../service/cart-service.service';
import {OrdersService} from '../../../../service/orders.service';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.scss']
})
export class FlowersComponent implements OnInit {
  public listFlowers: Flower[];
  isDisabledCartButton;

  constructor(public flowersService: FlowersService,
              public cartService: CartService
              ) {
  }

  ngOnInit(): void {
    this.getListFlower();
  }

  getListFlower(): void {
    const listFlower = this.flowersService.getDataFlower();
    if (listFlower != null) {
      this.listFlowers = listFlower;
    } else {
      this.listFlowers = this.flowersService.getListFlower();
    }
  }

  addToCart(flower: Flower): void {
    this.cartService.addToCart(flower);
  }
}
