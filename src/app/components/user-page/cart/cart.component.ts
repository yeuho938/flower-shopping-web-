import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../service/cart-service.service';
import {Cart} from '../../../model/cart.class';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  dataCart: Cart[] = [];
  totalPrice = 0;
  isProductExit = false;

  constructor(public cartService: CartService) {
  }

  ngOnInit(): void {
    this.getDataCart();
  }

  getDataCart(): void {
    this.dataCart = this.cartService.getCartData();
    this.totalPrice = this.cartService.getTotalPrice();
    if (this.dataCart != null) {
      this.isProductExit = true;
    }
  }

  onDeleteItem(id: number): void {
    this.cartService.onDeleteItem(id);
    this.getDataCart();
  }

  onChangeQuantity(quantity: number, id: number, isIncrease: boolean): void {
    this.cartService.onChangeQuantity(quantity, id, isIncrease);
    this.getDataCart();
  }

  clearCart(): void {
    localStorage.removeItem('infoCart');
    localStorage.removeItem('totalPriceCart');
    this.isProductExit = false;
    this.getDataCart();
  }
}
