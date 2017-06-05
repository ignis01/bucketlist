

import {Component, OnInit} from '@angular/core';
import {BucketListItem} from './bucket-list-item';
import {BucketListService} from './bucket-list.service';
import {Router} from "@angular/router";
import {BucketListResponse} from "./bucket-list-response";


/*export class BucketListItem{
  itemId: number;
  title: string;
  description: string;
  accomplished: boolean;
  accomplishedDate:string;
}*/



@Component({
  selector: 'my-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.css'],
  providers:[BucketListService]
})

export class BucketListComponent implements OnInit{

  title = 'Destination List!!!';
  name = 'Yi';
  bucketList:BucketListItem[];
  item:BucketListItem;

  constructor(private bucketListService: BucketListService,
              private router:Router){}

  onSelect(listItem:BucketListItem):void{
    this.item = listItem;
  }

  ngOnInit(): void {
    this.getBucketList();
  }

  getBucketList():void{
    this.bucketListService.getBucketList().then(bucketList=>this.bucketList = bucketList);
  }

  gotoDetail():void{
    this.router.navigate(['/detail',this.item.itemId]);
  }

  add(title:string, description:string){
    this.bucketListService.create(title, description).then(item=>{this.getBucketList()});
  }
  delete(listItem:BucketListItem){
    this.bucketListService.delete(listItem.itemId).then(()=>this.getBucketList());
  }
}


