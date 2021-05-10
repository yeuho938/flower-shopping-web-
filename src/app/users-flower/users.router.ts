import {Routes} from '@angular/router';
import {ContentComponent} from './content/content.component';
import {CartComponent} from './cart/cart.component';
import {OrderUserComponent} from './order-user/order-user.component';
import {OrderDetailUserComponent} from './order-detail-user/order-detail-user.component';
import {CheckoutPageComponent} from './checkout-page/checkout-page.component';
import {OwnerPageComponent} from '../owner-flower/owner-page/owner-page.component';

export const listRouteUser: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ContentComponent,
  }
  ,
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'orderUser',
    component: OrderUserComponent
  },
  {
    path: 'order/:id',
    component: OrderDetailUserComponent
  },
  {
    path: 'checkout',
    component: CheckoutPageComponent
  },
  {
    path: 'owner',
    component: OwnerPageComponent
  }
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }
];
