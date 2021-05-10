import { Injectable } from '@angular/core';
import {Order} from '../model/order.class';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public orders: Order[] = [
    {
      id: 1,
      nameUser: 'Yeu ho',
      address: ' 101b le huu trac, son tra, da nang',
      phone: 3557468578,
      totalPrice: 12324,
      idFlower: 1
    },
    {
      id: 2,
      nameUser: ' Ha vu Thuat',
      address: ' 101b le huu trac, son tra, da nang',
      phone: 34645657,
      totalPrice: 12674,
      idFlower: 3
    },
    {
      id: 3,
      nameUser: 'Nguyen Manh',
      address: ' 101b le huu trac, son tra, da nang',
      phone: 4565768898,
      totalPrice: 200000,
      idFlower: 2
    },
  ];
  public order = [];
  constructor() {
  }
  getAllOrders(): Order[]{
    return this.orders;
  }
  getOrderById(id: number): any{
    this.order = JSON.parse(localStorage.getItem('ordersPlaced'));

    const getId = [];
    for (const item of this.order) {
      if (item.id === id){
        getId.push(item);
      }
    }
    return getId;
  }
}
