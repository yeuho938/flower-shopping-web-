import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FlowersService} from '../../../service/flowers.service';
import {OrdersService} from '../../../service/orders.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  orderDisplay = 'none';
  dataCarts: any[];
  totalPriceCart: number;
  constructor(public formBuilder: FormBuilder, public flowerService: FlowersService, public ordersService: OrdersService) {
  }

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
    phone: ''
  });

  ngOnInit(): void {
    this.getAllInfoCart();
  }
  getAllInfoCart(): void {
    this.dataCarts = JSON.parse(localStorage.getItem('infoCart'));
    this.totalPriceCart = JSON.parse(localStorage.getItem('totalPriceCart'));
  }
  onSubmitOrder(): void {
    this.ordersService.onSubmitOrder(this.dataCarts , this.checkoutForm.value);
    this.orderDisplay = 'block';
    this.checkoutForm.reset();
  }
}
