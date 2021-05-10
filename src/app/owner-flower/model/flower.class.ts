export class Flower{
  id: number;
  name: string;
  image: string;
  price: number;
  remainingStock: number;
  constructor(id: number, name: string, image: string, price: number, remainingStock: number ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.remainingStock = remainingStock;
  }
}
