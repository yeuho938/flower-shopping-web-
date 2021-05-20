import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import {UsersPageComponent} from './homepage/users-page.component';
import {NgImageSliderModule} from 'ng-image-slider';
import { CartComponent } from './cart/cart.component';
import { OrderUserComponent } from './orders/order-user/order-user.component';
import { OrderDetailUserComponent } from './orders/order-detail-user/order-detail-user.component';
import {RouterModule} from '@angular/router';
import {AnimateOnScrollModule} from 'ng2-animate-on-scroll';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import {OwnerFlowerModule} from '../owner-page/owner-flower.module';
import {ReactiveFormsModule} from '@angular/forms';
import {listRouteUser} from './users.router';
import { FlowerDetailComponent } from './flowers/flower-detail/flower-detail.component';
import { ListFlowersComponent } from './flowers/list-flowers/list-flowers.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    UsersPageComponent,
    CartComponent,
    OrderUserComponent,
    OrderDetailUserComponent,
    CheckoutPageComponent,
    FlowerDetailComponent,
    ListFlowersComponent
  ],
  exports: [
    UsersPageComponent,
  ],
    imports: [
        CommonModule,
        NgImageSliderModule,
        AnimateOnScrollModule.forRoot(),
        RouterModule.forRoot(listRouteUser),
        OwnerFlowerModule,
        ReactiveFormsModule,
    ]
})
export class UsersFlowerModule { }
