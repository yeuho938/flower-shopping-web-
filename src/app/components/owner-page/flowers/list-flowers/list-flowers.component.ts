import { Component, OnInit } from '@angular/core';
import {Flower} from '../../../../model/flower.class';
import {FlowersService} from '../../../../service/flowers.service';
import {OrdersService} from '../../../../service/orders.service';
@Component({
  selector: 'app-list-flowers',
  templateUrl: './list-flowers.component.html',
  styleUrls: ['./list-flowers.component.scss']
})
export class ListFlowersComponent implements OnInit {
  public flowers: Flower[];
  constructor( public flowerService: FlowersService) { }

  ngOnInit(): void {
    const listFlower = this.flowerService.getDataFlower();
    if (listFlower != null){
        this.flowers = listFlower;
    }else {
      this.flowers = this.flowerService.getListFlower();
    }
  }
}
