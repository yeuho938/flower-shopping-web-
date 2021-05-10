import { Injectable } from '@angular/core';
import {Flower} from '../model/flower.class';

@Injectable({
  providedIn: 'root'
})
export class FlowersService {
  public flowers: Flower[] = [
    {
      id: 1,
      name: 'Rose Land',
      image: 'https://cdn.tgdd.vn/Files/2021/02/07/1326447/nhung-mau-hoa-dep-y-nghia-danh-tang-nguoi-yeu-nga-4.jpg',
      price: 100000,
      remainingStock: 34
    },
    {
      id: 2,
      name: 'Sunny Smile',
      image: 'https://hoatuoi360.vn/uploads/file/hoatuoi360--%20bo%20hong%20mix%20nhieu%20mau%206002.jpg',
      price: 200000,
      remainingStock: 20
    },
    {
      id: 3,
      name: 'Hermosa',
      image: 'https://hoatuoinangmai.com/wp-content/uploads/2019/08/gi%E1%BB%8F-hoa-%C4%91%E1%BA%B9p-t%E1%BA%B7ng-b%E1%BA%A1n-g%C3%A1i-2.jpg',
      price: 140000,
      remainingStock: 10
    },
    {
      id: 4,
      name: 'Carla',
      image: 'https://hoasinhnhat365.com/wp-content/uploads/2020/03/lang-hoa-dep.jpg',
      price: 140000,
      remainingStock: 30
    },
    {
      id: 5,
      name: 'Rose Land',
      image: 'https://diachishophoa.com/uploads/sanpham/hoa-bo-sinh-nhat-1563427449-0qrsw.jpg',
      price: 160000,
      remainingStock: 31
    },
    {
      id: 6,
      name: 'Fly me to The Moon',
      image: 'https://img.mayflower.vn/2020/03/yeu-mai-mot-tinh-yeu.jpg',
      price: 110000,
      remainingStock: 30
    },
    {
      id: 7,
      name: 'Jubilant',
      image: 'https://dienhoalily.com/wp-content/uploads/2020/02/6070c3200ac6f298abd7.jpg',
      price: 400000,
      remainingStock: 30
    },
    {
      id: 7,
      name: 'Lion',
      image: 'http://hoatuoi360.vn/uploads/file/hinh%20san%20pham/chi%20tiet%20sp/hop-hoa-tinh-ban-cao-ca-11-hoatuoi360.vn.jpg',
      price: 400000,
      remainingStock: 30
    }
  ];
  constructor() { }
  getListFlower(): Flower[]{
    return this.flowers;
  }
  getFlowerById(id: number): any{
      let getId = null;
      for (const item of this.flowers) {
        if (item.id === id){
          getId = item;
        }
      }
      return getId;
  }
}
