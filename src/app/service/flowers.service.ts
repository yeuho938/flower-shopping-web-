import {Injectable} from '@angular/core';
import {Flower} from '../model/flower.class';
import {Router} from '@angular/router';

@Injectable()
export class FlowersService {
  public listFlowers: Flower[];

  constructor(public router: Router) {
  }

  getListFlower(): Flower[] {
    this.listFlowers = [
      {
        id: 1,
        name: 'Rose Land',
        description: 'It has pale yellow perianths with a darker central trumpet (paracorolla or "corona"). The long, ' +
          'narrow leaves are slightly greyish in colour and rise from the base of the stem.',
        image: 'https://cdn.tgdd.vn/Files/2021/02/07/1326447/nhung-mau-hoa-dep-y-nghia-danh-tang-nguoi-yeu-nga-4.jpg',
        price: 100000,
        remainingStock: 3
      },
      {
        id: 2,
        name: 'Sunny Smile',
        description: 'Most lilies grow from a bulb, which in some species develops into a rhizome, ' +
          'which carries small bulbs.\n' + 'Lilies grow in Europe, North America, and Asia. There are ' +
          'more than 100 species, and many cultivated varieties',
        image: 'https://hoatuoi360.vn/uploads/file/hoatuoi360--%20bo%20hong%20mix%20nhieu%20mau%206002.jpg',
        price: 200000,
        remainingStock: 10
      },
      {
        id: 3,
        name: 'Hermosa',
        description: 'Some Viola species are perennial plants, some are annual plants, and a few are small shrubs. Many species, ' +
          'and cultivars are grown in gardens for their flowers.',
        image: 'https://hoatuoinangmai.com/wp-content/uploads/2019/08/gi%E1%BB%8F-hoa-%C4%91%E1%BA%B9p-t%E1%BA%B7ng-b%E1%BA%A1n-g%C3%A1i-2.jpg',
        price: 140000,
        remainingStock: 20
      },
      {
        id: 4,
        name: 'Carla',
        description: 'Some Viola species are perennial plants, some are annual plants, and a few are small shrubs. Many species, ' +
          'and cultivars are grown in gardens for their flowers.',
        image: 'https://hoasinhnhat365.com/wp-content/uploads/2020/03/lang-hoa-dep.jpg',
        price: 140000,
        remainingStock: 30
      },
      {
        id: 5,
        name: 'The Sky ',
        description: 'Some Viola species are perennial plants, some are annual plants, and a few are small shrubs. Many species, ' +
          'and cultivars are grown in gardens for their flowers.',
        image: 'https://diachishophoa.com/uploads/sanpham/hoa-bo-sinh-nhat-1563427449-0qrsw.jpg',
        price: 160000,
        remainingStock: 40
      },
      {
        id: 6,
        name: 'Fly me to The Moon',
        description: 'Some Viola species are perennial plants, some are annual plants, and a few are small shrubs. Many species, ' +
          'and cultivars are grown in gardens for their flowers.',
        image: 'https://img.mayflower.vn/2020/03/yeu-mai-mot-tinh-yeu.jpg',
        price: 110000,
        remainingStock: 50
      },
      {
        id: 7,
        name: 'Jubilant',
        description: 'Some Viola species are perennial plants, some are annual plants, and a few are small shrubs. Many species, ' +
          'and cultivars are grown in gardens for their flowers.',
        image: 'https://dienhoalily.com/wp-content/uploads/2020/02/6070c3200ac6f298abd7.jpg',
        price: 400000,
        remainingStock: 60
      },
      {
        id: 8,
        name: 'Lion',
        description: 'Some Viola species are perennial plants, some are annual plants, and a few are small shrubs. Many species, ' +
          'and cultivars are grown in gardens for their flowers.',
        image: 'http://hoatuoi360.vn/uploads/file/hinh%20san%20pham/chi%20tiet%20sp/hop-hoa-tinh-ban-cao-ca-11-hoatuoi360.vn.jpg',
        price: 400000,
        remainingStock: 70
      }
    ];
    return this.listFlowers;
  }

  getFlowerById(id: number): any {
    let getAnFlower = null;
    const dataFlower = JSON.parse(localStorage.getItem('listFlower'));
    if (dataFlower != null) {
      for (const item of dataFlower) {
        if (item.id === id) {
          getAnFlower = item;
        }
      }
    } else {
      for (const item of this.listFlowers) {
        if (item.id === id) {
          getAnFlower = item;
        }
      }
    }
    return getAnFlower;
  }
  setDataFlower(data: any): any{
    return localStorage.setItem('listFlower', JSON.stringify(data));
  }
  getDataFlower(): any{
    return JSON.parse(localStorage.getItem('listFlower'));
  }
}
