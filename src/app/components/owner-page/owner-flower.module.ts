import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { ListFlowersComponent } from './flowers/list-flowers/list-flowers.component';
import { EditFlowersComponent } from './flowers/edit-flowers/edit-flowers.component';
import { FlowersComponent } from './flowers/flowers.component';
import { ListOrderComponent } from './orders/list-order/list-order.component';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';
import {listRouter} from './owner.router';
import {RouterModule} from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DashboardComponent} from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    NavigationComponent,
    ListFlowersComponent,
    EditFlowersComponent,
    ListOrderComponent,
    OrderDetailComponent,
    DashboardComponent,
    FlowersComponent,
    OrdersComponent
  ],
  exports: [
    DashboardComponent,
    ListOrderComponent,
    OrdersComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(listRouter),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class OwnerFlowerModule { }
