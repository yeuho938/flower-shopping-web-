import {Injectable} from '@angular/core';
import {Flower} from '../model/flower.class';
import {Cart} from '../model/cart.class';

@Injectable()
export class CartService {
  itemsCart: Cart[] = [];
  cartTotal = 0;
  idCart = 1;

  constructor() {
  }

  addToCart(flower: Flower): void {
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
        this.idCart = this.getLastId(dataCart);
        dataCart.push(
          new Cart(this.idCart, flower.id, flower.name, flower.image, 1, flower.price)
        );
        this.setCartData(dataCart);
      } else {
        this.itemsCart.push(
          new Cart(this.idCart, flower.id, flower.name, flower.image, 1, flower.price)
        );
        this.setCartData(this.itemsCart);
      }
    }
    this.setTotalPrice(dataCart);
    alert('Add to cart successful');
  }

  getLastId(dataCart): number {
    const lastId = dataCart.length > 0 ? dataCart.sort((a, b) => {
      if (a.id > b.id) {
        return -1;
      } else if (a.id < b.id) {
        return 1;
      } else {
        return 0;
      }
    })[0].id + 1 : 1;
    return lastId;
  }

  setTotalPrice(dataInCart: any): void {
    this.cartTotal = 0;
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

  onDeleteItem(id: number): void {
    const dataCart = this.getCartData();
    for (const item of dataCart) {
      if (item.idFlower === id) {
        dataCart.splice(item, 1);
      }
    }
    this.setCartData(dataCart);
    this.setTotalPrice(dataCart);
  }

  onChangeQuantity(quantity: number, id: number, isIncrease: boolean): void {
    const dataCart = this.getCartData();
    for (const item of dataCart) {
      if (item.idFlower === id) {
        if (isIncrease === true) {
          item.quantity = quantity + 1;
        } else {
          if (item.quantity > 1) {
            item.quantity = quantity - 1;
          } else if (item.quantity <= 1) {
            console.log(item.name);
            dataCart.splice(item, 1);
            // item.quantity = quantity - 1;
          }
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
