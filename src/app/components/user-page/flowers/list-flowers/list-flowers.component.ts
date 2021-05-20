import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Flower} from '../../../../model/flower.class';
import {FlowersService} from '../../../../service/flowers.service';
import {CartService} from '../../../../service/cart-service.service';
import {HeaderComponent} from '../../header/header.component';

@Component({
  selector: 'app-list-flowers',
  templateUrl: './list-flowers.component.html',
  styleUrls: ['./list-flowers.component.scss']
})
export class ListFlowersComponent implements OnInit, AfterViewInit {
  public listFlowers: Flower[];
  isDisabledCartButton;
  isHomePage = true;
  @ViewChild(HeaderComponent,  { static: false }) headerComponent: HeaderComponent;
  constructor(public flowersService: FlowersService, public cartService: CartService) { }

  ngOnInit(): void {
    this.getListFlower();
  }
  ngAfterViewInit(): void{
    this.isHomePage = false;
  }
  getListFlower(): void {
    this.listFlowers = this.flowersService.getListFlower();
  }
  addToCart(flower: Flower): void {
    this.cartService.addToCart(flower);
  }
}
