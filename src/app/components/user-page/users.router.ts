import {Routes} from '@angular/router';
import {ContentComponent} from './content/content.component';
import {CartComponent} from './cart/cart.component';
import {OrderUserComponent} from './orders/order-user/order-user.component';
import {OrderDetailUserComponent} from './orders/order-detail-user/order-detail-user.component';
import {CheckoutPageComponent} from './checkout-page/checkout-page.component';
import {FlowerDetailComponent} from './flowers/flower-detail/flower-detail.component';
import {ListFlowersComponent} from './flowers/list-flowers/list-flowers.component';
import {DashboardComponent} from '../owner-page/dashboard/dashboard.component';

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
    path: 'list-flower',
    component: ListFlowersComponent
  },
  {
    path: 'flower/:id',
    component: FlowerDetailComponent
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'orderUser',
    component: OrderUserComponent
  },
  {
    path: 'orderUser/:id',
    component: OrderDetailUserComponent
  },
  {
    path: 'checkout',
    component: CheckoutPageComponent
  },
  {
    path: 'owner',
    component: DashboardComponent
  }
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }
];
