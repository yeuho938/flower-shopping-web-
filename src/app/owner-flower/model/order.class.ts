export class Order{
  id: number;
  nameUser: string;
  address: string;
  phone: number;
  totalPrice: number;
  idFlower: number;

  constructor(id: number, name: string, add: string, phone: number, total: number, idFlower: number) {
    this.id = id;
    this.nameUser = name;
    this.address = add;
    this.totalPrice = total;
    this.idFlower = idFlower;
  }
}
