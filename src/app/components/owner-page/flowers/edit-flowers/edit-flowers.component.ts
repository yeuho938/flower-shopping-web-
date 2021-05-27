import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Flower} from '../../../../model/flower.class';
import {FlowersService} from '../../../../service/flowers.service';
import {FormBuilder} from '@angular/forms';
import {UserService} from '../../../../service/user.service';
import {OrdersService} from '../../../../service/orders.service';

@Component({
  selector: 'app-edit-flowers',
  templateUrl: './edit-flowers.component.html',
  styleUrls: ['./edit-flowers.component.scss']
})
export class EditFlowersComponent implements OnInit {
  public flower: Flower = null;
  public listFlowers: Flower[];
  public isLoginSuccess: boolean;
  constructor(public router: Router,
              public activatedRoute: ActivatedRoute,
              public flowerService: FlowersService,
              public formBuilder: FormBuilder) {
  }

  editForm = this.formBuilder.group({
    name: '',
    price: '',
    image: '',
    remainingStock: ''
  });

  ngOnInit(): void {
    this.getIdBySnapshot();
  }

  getIdBySnapshot(): void {
    const id = (+this.activatedRoute.snapshot.params.id);
    this.flower = this.flowerService.getFlowerById(id);
  }

  onEditData(id: number): any {
    const name = this.editForm.value.name;
    const price = this.editForm.value.price;
    const image = this.editForm.value.image;
    const stock = this.editForm.value.remainingStock;
    const dataFlower = this.flowerService.getDataFlower();
    this.listFlowers = this.flowerService.getListFlower();

    if (dataFlower != null){
      for (const item of dataFlower) {
        if (item.id === id){
          item.name = name;
          item.price = price;
          item.image = image;
          item.remainingStock = stock;
        }
      }
      this.flowerService.setDataFlower(dataFlower);
    }else {
      for (const item of this.listFlowers) {
        if (item.id === id){
          item.name = name;
          item.price = price;
          item.image = image;
          item.remainingStock = stock;
        }
      }
      this.flowerService.setDataFlower(this.listFlowers);
    }
    this.router.navigateByUrl('flower/list');
  }

}
