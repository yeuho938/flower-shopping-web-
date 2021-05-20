export class Cart{
  id?: number;
  idFlower: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
  constructor(id: number, idFlower: number, name: string, image: string, quantity: number, price: number) {
    this.id = id;
    this.idFlower = idFlower;
    this.name = name;
    this.image = image;
    this.quantity = quantity;
    this.price = price;

  }
}
