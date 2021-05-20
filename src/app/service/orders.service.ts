import {Injectable} from '@angular/core';
import {FlowersService} from './flowers.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService  {
  ordersPaid = JSON.parse(localStorage.getItem('purchasedOrders'));
  orders: any[] = [];
  idOrder = 0;
  constructor(public flowersService: FlowersService) {
  }

  getOrderById(id: number): any {
    const listOrder = JSON.parse(localStorage.getItem('purchasedOrders'));
    const getAnOrder = [];
    for (const item of listOrder) {
      if (item.id === id) {
        getAnOrder.push(item);
      }
    }
    return getAnOrder;
  }

  onSubmitOrder(dataCarts: any[], infoUsers: any[]): any {
    this.idOrder++;
    if (this.ordersPaid == null) {
      this.orders.push({
        id: this.idOrder,
        info: infoUsers,
        flowers: dataCarts
      });
      localStorage.setItem('purchasedOrders', JSON.stringify(this.orders));
    } else {
      // tslint:disable-next-line:forin
      for (const i in this.ordersPaid) {
        this.idOrder = this.ordersPaid[i].id++;
      }
      this.ordersPaid.push({
        id: this.idOrder,
        info: infoUsers,
        flowers: dataCarts
      });
      localStorage.setItem('purchasedOrders', JSON.stringify(this.ordersPaid));
    }
    this.onChangeDataFlower();
    alert('Payment success');
  }
  onChangeDataFlower(): any{
    const flowers = this.flowersService.getListFlower();
    for (const flower of flowers) {
      for (const order of this.ordersPaid) {
        for (const infoCart of order.flowers) {
          if (flower.id === infoCart.id) {
            flower.remainingStock = flower.remainingStock - infoCart.quantity;
            console.log(flower.remainingStock);
          }
        }
      }
    }
    return flowers;
  }
}
