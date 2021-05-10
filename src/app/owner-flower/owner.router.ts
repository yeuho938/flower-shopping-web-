import {Routes} from '@angular/router';
import {OwnerPageComponent} from './owner-page/owner-page.component';
import {ListFlowersComponent} from './flowers/list-flowers/list-flowers.component';
import {FlowersComponent} from './flowers/flowers.component';
import {EditFlowersComponent} from './flowers/edit-flowers/edit-flowers.component';
import {ListOrderComponent} from './orders/list-order/list-order.component';
import {OrderDetailComponent} from './orders/order-detail/order-detail.component';
import {OrdersComponent} from './orders/orders.component';
// import {NotFoundComponent} from './not-found/not-found.component';


export const listRouter: Routes = [

  {
    path: 'flower',
    component: FlowersComponent,
    children: [
      {
        path: '',
        redirectTo: '/flower/list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ListFlowersComponent,
      },
      {
        path: ':id/edit',
        component: EditFlowersComponent
      }
    ]
  },
  {
    path: 'order',
    component: OrdersComponent,
    children: [
      {
        path: '',
        redirectTo: '/order/list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ListOrderComponent,
      },
      {
        path: ':id',
        component: OrderDetailComponent
      }
    ]
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }
];
