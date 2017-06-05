import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { RouterModule } from '@angular/router';

import {ItemDetailComponent} from './item-detail.compponent';
import {BucketListComponent} from './bucket-list.component';
import {AppComponent} from './app.component';
import {BucketListService} from './bucket-list.service';
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module"

@NgModule({
  declarations: [
    BucketListComponent,
    ItemDetailComponent,
    AppComponent,
    DashboardComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],

  providers: [BucketListService],

  bootstrap: [AppComponent]
})

export class AppModule { }


