import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Flower} from '../../model/flower.class';
import {FlowersService} from '../../service/flowers.service';

@Component({
  selector: 'app-edit-flowers',
  templateUrl: './edit-flowers.component.html',
  styleUrls: ['./edit-flowers.component.scss']
})
export class EditFlowersComponent implements OnInit {
  public flower: Flower = null;
  constructor( public activatedRoute: ActivatedRoute, public route: Router, public flowerService: FlowersService) { }

  ngOnInit(): void {
    this.getIdBySnapshot();
  }
  getIdBySnapshot(): void {
    const id = (+this.activatedRoute.snapshot.params.id);
    this.flower = this.flowerService.getFlowerById(id);
  }
}
