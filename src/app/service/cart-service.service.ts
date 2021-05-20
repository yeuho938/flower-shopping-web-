import {Injectable} from '@angular/core';
import {Flower} from '../model/flower.class';
import {Cart} from '../model/cart.class';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemsCart: Cart[] = [];
  cartTotal = 0;
  idCart = 1;
  constructor() {
  }

  addToCart(flower: Flower): void {
    this.idCart++;
    const dataCart = this.getCartData();
    let productExit;
    if (dataCart) {
      productExit = dataCart.find((item) => {
        return item.idFlower === flower.id;
      });
    }
    if (productExit) {
      productExit.quantity++;
      this.setCartData(dataCart);
    } else {
      if (dataCart) {
        dataCart.push(
          new Cart(this.idCart, flower.id, flower.name, flower.image, 1, flower.price)
        );
        this.setCartData(dataCart);
        this.setTotalPrice(dataCart);
      } else {
        this.itemsCart.push(
          new Cart(this.idCart, flower.id, flower.name, flower.image, 1, flower.price)
        );
        this.setCartData(this.itemsCart);
        this.setTotalPrice(this.itemsCart);
      }
    }
    alert('Add to cart successful');
  }

  setTotalPrice(dataInCart: any): void {
    // dataInCart.forEach(item => {
    //   this.cartTotal += (item.quantity * item.price);
    // });
    for (const item of dataInCart) {
      this.cartTotal += item.quantity * item.price;
    }
    console.log(this.cartTotal);
    localStorage.setItem('totalPriceCart', JSON.stringify(this.cartTotal));
  }

  setCartData(dataCart: any): void {
    return localStorage.setItem('infoCart', JSON.stringify(dataCart));
  }

  getCartData(): any {
    return JSON.parse(localStorage.getItem('infoCart'));
  }

  getTotalPrice(): any {
    return JSON.parse(localStorage.getItem('totalPriceCart'));
  }

  onDeleteItem(id: number): void {
    const dataCart = this.getCartData();
    for (const item of dataCart) {
      if (item.idFlower === id){
        dataCart.splice(item, 1);
      }
    }
    this.setCartData(dataCart);
    this.setTotalPrice(dataCart);
  }
  onChangeQuantity(quantity: number, id: number, isIncrease: boolean): void {
    const dataCart = this.getCartData();
    for (const item of dataCart) {
      if (item.idFlower === id){
        if (isIncrease === true) {
          item.quantity = quantity + 1;
        } else {
          item.quantity = quantity - 1;
        }
      }
    }
    this.setCartData(dataCart);
    this.setTotalPrice(dataCart);
  }

  clearCart(): any {
    this.itemsCart = [];
    return this.itemsCart;
  }
}
