import {Component, OnChanges, OnInit} from '@angular/core';
import {CartService} from '../cart-service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnChanges   {
  data = [];
  total = 0;
  constructor( public cartService: CartService) { }
  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('flower'));
    this.total = JSON.parse(localStorage.getItem('total'));
  }
  DeleteItem(id: number): void{
    this.cartService.DeleteAnItem(id);
  }
  ngOnChanges(): void {
    this.data = JSON.parse(localStorage.getItem('flower'));
    this.total = JSON.parse(localStorage.getItem('total'));
  }
  increaseQuantity(quantity: number, id: number){
    this.cartService.increaseQuantity(quantity, id);
  }
  clearCart(): void{
    localStorage.removeItem('flower');
    localStorage.removeItem('total');
  }
}
