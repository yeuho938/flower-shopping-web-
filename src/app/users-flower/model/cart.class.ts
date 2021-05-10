export class Cart{
  id?: number;
  idFlower: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  constructor(id: number, idFlower: number, name: string, image: string, price: number, quantity: number) {
    this.id = id;
    this.idFlower = idFlower;
    this.name = name;
    this.image = image;
    this.price = price;
    this.quantity = quantity;
  }
}
