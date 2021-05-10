import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  flowerInCart: any;
  totalCart: number;
  orders = [];
  ordersPlaced = [];
  id = 0;
  orderDisplay = 'none';
  constructor( public formBuilder: FormBuilder) { }
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
    phone: ''
  });
  ngOnInit(): void {
    this.flowerInCart =  JSON.parse(localStorage.getItem('flower'));
    this.totalCart =  JSON.parse(localStorage.getItem('total'));
    this.ordersPlaced = JSON.parse(localStorage.getItem('ordersPlaced'));
  }
  onSubmit(): void {
    this.id++;
    this.orders.push({
      id: this.id,
      info: this.checkoutForm.value,
      flowers: this.flowerInCart
    });
    //   this.checkoutForm.reset();
    localStorage.setItem('ordersPlaced', JSON.stringify(this.orders));
    alert('Payment success');
    this.orderDisplay = 'block';
  }
}
