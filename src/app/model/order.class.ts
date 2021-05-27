export class Order{
  id: number;
  dataUser: any;
  dataCart: any;
  totalPrice: number;

  constructor(id: number, dataUser: any, dataCart: any, total: number) {
    this.id = id;
    this.dataUser = dataUser;
    this.dataCart = dataCart;
    this.totalPrice = total;
  }
}
