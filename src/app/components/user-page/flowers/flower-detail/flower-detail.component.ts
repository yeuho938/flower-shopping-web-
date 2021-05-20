import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Flower} from '../../../../model/flower.class';
import {FlowersService} from '../../../../service/flowers.service';
import {CartService} from '../../../../service/cart-service.service';

@Component({
  selector: 'app-flower-detail',
  templateUrl: './flower-detail.component.html',
  styleUrls: ['./flower-detail.component.scss']
})
export class FlowerDetailComponent implements OnInit {
  public flowerDetail: Flower = null;
  constructor(
    public activatedRoute: ActivatedRoute,
    public route: Router,
    public flowerService: FlowersService,
    public cartService: CartService) { }

  ngOnInit(): void {
    this.getIdBySnapshot();
  }
  getIdBySnapshot(): void {
    const id = (+this.activatedRoute.snapshot.params.id);
    this.flowerDetail = this.flowerService.getFlowerById(id);
    console.log(id);
  }
  addToCart(flower: Flower): void {
    this.cartService.addToCart(flower);
  }
}
