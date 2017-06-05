/**
 * Created by ydong05 on 02/06/2017.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {BucketListComponent} from './bucket-list.component';
import {ItemDetailComponent} from './item-detail.compponent';

const routes: Routes = [
  {
    path: 'bucketList',
    component: BucketListComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path:'detail/:itemId',
    component: ItemDetailComponent
  }
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}
