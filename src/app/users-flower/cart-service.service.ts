import {Injectable, OnChanges} from '@angular/core';
import {Flower} from '../owner-flower/model/flower.class';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  cartTotal;
  id = 1;

  constructor() {
  }

  addToCart(flower: Flower): void {
    let productExit = false;
    for (const i in this.items) {
      if (this.items[i].idFlower === flower.id) {
        this.items[i].quantity++;
        productExit = true;
      }
    }
    if (!productExit) {
      this.items.push({
        id: this.id++,
        idFlower: flower.id,
        name: flower.name,
        image: flower.image,
        quantity: 1,
        price: flower.price
      });
    }
    localStorage.setItem('flower', JSON.stringify(this.items));
    this.cartTotal = 0;
    this.items.forEach(item => {
      this.cartTotal += (item.quantity * item.price);
    });
    localStorage.setItem('total', JSON.stringify(this.cartTotal));

  }

  DeleteAnItem(id: number): void {
    delete this.items[id];
    localStorage.setItem('flower', JSON.stringify(this.items));

  }

  increaseQuantity(quantity: number, id: number): void {
    // tslint:disable-next-line:forin
    for (const i in this.items) {
      if (this.items[i].id === id) {
        this.items[i].quantity = quantity + 1;
      }
      console.log(this.items[i].quantity);

    }
    localStorage.setItem('flower', JSON.stringify(this.items));
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
