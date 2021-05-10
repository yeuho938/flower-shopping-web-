import { Component, OnInit } from '@angular/core';
import {Flower} from '../../model/flower.class';
import {FlowersService} from '../../service/flowers.service';

@Component({
  selector: 'app-list-flowers',
  templateUrl: './list-flowers.component.html',
  styleUrls: ['./list-flowers.component.scss']
})
export class ListFlowersComponent implements OnInit {
  public flowers: Flower[];
  constructor( public flowerService: FlowersService) { }

  ngOnInit(): void {
  this.flowers = this.flowerService.getListFlower();
  }

}
