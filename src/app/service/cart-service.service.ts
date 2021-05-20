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
    dataInCart.forEach(item => {
      this.cartTotal += (item.quantity * item.price);
    });
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
  onDeleteAnItem(id: number): void {
    let dataCart = this.getCartData();
    const index = dataCart.findIndex(element => element.id === id);
    if (index > -1) {
      dataCart = dataCart.splice(index, 1);
      this.setCartData(dataCart);
    }
  }

  onChangeQuantity(quantity: number, id: number, isIncrease: boolean): void {
    const dataCart = this.getCartData();
    const index = dataCart.findIndex(element => element.idFlower === id);
    if (isIncrease === true) {
      dataCart[index].quantity = quantity + 1;
    } else {
      dataCart[index].quantity = quantity - 1;
    }
    this.setCartData(dataCart);
  }
  clearCart(): any {
    this.itemsCart = [];
    return this.itemsCart;
  }
}
