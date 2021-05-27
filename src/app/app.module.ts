import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {UsersFlowerModule} from './components/user-page/users-flower.module';
import {OwnerFlowerModule} from './components/owner-page/owner-flower.module';
import {RouterModule} from '@angular/router';
import {CartService} from './service/cart-service.service';
import {FlowersService} from './service/flowers.service';
import {OrdersService} from './service/orders.service';
import {UserService} from './service/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersFlowerModule,
    OwnerFlowerModule,
    RouterModule
  ],
  providers: [CartService, FlowersService, OrdersService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
