import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { ListFlowersComponent } from './flowers/list-flowers/list-flowers.component';
import { EditFlowersComponent } from './flowers/edit-flowers/edit-flowers.component';
import { AddFlowersComponent } from './flowers/add-flowers/add-flowers.component';
import { ListOrderComponent } from './orders/list-order/list-order.component';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';
import { OwnerPageComponent } from './owner-page/owner-page.component';
import { FlowersComponent } from './flowers/flowers.component';
import {listRouter} from './owner.router';
import {RouterModule} from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    NavigationComponent,
    ListFlowersComponent,
    EditFlowersComponent,
    AddFlowersComponent,
    ListOrderComponent,
    OrderDetailComponent,
    OwnerPageComponent,
    FlowersComponent,
    OrdersComponent
  ],
    exports: [
        OwnerPageComponent,
        OrdersComponent
    ],
  imports: [
    CommonModule,
    RouterModule.forRoot(listRouter),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class OwnerFlowerModule { }
