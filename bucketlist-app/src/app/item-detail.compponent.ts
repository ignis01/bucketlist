/**
 * Created by ydong05 on 01/06/2017.
 */
import {Component, Input, OnInit} from '@angular/core';
import {BucketListItem} from "./bucket-list-item";
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import {BucketListService} from './bucket-list.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector:'item-detail',
  templateUrl:'./item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})


export class ItemDetailComponent implements OnInit{
  constructor(private bucketListService:BucketListService,
              private route:ActivatedRoute,
              private location: Location){};

  @Input() item:BucketListItem;
  ngOnInit():void {
    this.route.params
      .switchMap((params:Params)=> this.bucketListService.getListItem(+params['itemId']))
      .subscribe(item=>this.item=item);
  }

  goBack():void{
    this.location.back();
  }

  save():void{
    this.bucketListService.update(this.item).then(()=>this.goBack());
  }
}
