import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { UsersPageComponent } from './users-page/users-page.component';
import {NgImageSliderModule} from 'ng-image-slider';
import { CartComponent } from './cart/cart.component';
import { OrderUserComponent } from './order-user/order-user.component';
import { OrderDetailUserComponent } from './order-detail-user/order-detail-user.component';
import {RouterModule} from '@angular/router';
import {listRouteUser} from './users.router';
import {AnimateOnScrollModule} from 'ng2-animate-on-scroll';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import {OwnerFlowerModule} from '../owner-flower/owner-flower.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    UsersPageComponent,
    CartComponent,
    OrderUserComponent,
    OrderDetailUserComponent,
    CheckoutPageComponent
  ],
  exports: [
    UsersPageComponent
  ],
    imports: [
        CommonModule,
        NgImageSliderModule,
        AnimateOnScrollModule.forRoot(),
        RouterModule.forRoot(listRouteUser),
        OwnerFlowerModule,
        ReactiveFormsModule
    ]
})
export class UsersFlowerModule { }
