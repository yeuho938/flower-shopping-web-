import {Injectable} from '@angular/core';
import {FlowersService} from './flowers.service';
import {Flower} from '../model/flower.class';
import {stringify} from '@angular/compiler/src/util';

@Injectable()
export class OrdersService {
  orders: any[] = [];
  idOrder = 0;

  constructor(public flowersService: FlowersService) {
  }

  getOrderById(id: number): any {
    const listOrder = this.getDataOrder();
    const getAnOrder = [];
    for (const item of listOrder) {
      if (item.id === id) {
        getAnOrder.push(item);
      }
    }
    return getAnOrder;
  }

  onSubmitOrder(dataCarts: any[], infoUsers: any[], price: number): any {
    this.idOrder++;
    const listOrder = this.getDataOrder();
    if (listOrder == null) {
      this.orders.push({
        id: this.idOrder,
        info: infoUsers,
        flowers: dataCarts,
        totalPrice: price
      });
      this.setDataOrder(this.orders);
      alert('Payment success');
    } else {
      this.idOrder = this.getLastId(listOrder);
      listOrder.push({
        id: this.idOrder,
        info: infoUsers,
        flowers: dataCarts,
        totalPrice: price
      });
      this.setDataOrder(listOrder);
      alert('Payment success');
    }
    this.onChangeDataFlower();
  }

  onChangeDataFlower(): any {
    const flowers = this.flowersService.getListFlower();
    const listOrder = this.getDataOrder();
    for (const flower of flowers) {
      for (const order of listOrder) {
        for (const infoCart of order.flowers) {
          if (flower.id === infoCart.idFlower) {
            flower.remainingStock = flower.remainingStock - infoCart.quantity;
          }
        }
      }
    }
    this.flowersService.setDataFlower(flowers);
  }

  getLastId(listOrder): number {
    const lastId = listOrder.length > 0 ? listOrder.sort((a, b) => {
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

  getDataOrder(): any {
    return JSON.parse(localStorage.getItem('listOrders'));
  }

  setDataOrder(order: any): any {
    return localStorage.setItem('listOrders', JSON.stringify(order));
  }
}
