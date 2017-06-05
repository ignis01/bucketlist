/**
 * Created by ydong05 on 01/06/2017.
 */
import {Component, OnInit} from '@angular/core';
import {BucketListItem} from './bucket-list-item';
import {BucketListService} from './bucket-list.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit{
  bucketList: BucketListItem[] = [];
  constructor(private bucketListService:BucketListService){}
  ngOnInit():void{
    this.bucketListService.getBucketList().then(bucketList=>this.bucketList=bucketList.slice(1,5));
  }
}
