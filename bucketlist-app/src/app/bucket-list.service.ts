/**
 * Created by ydong05 on 01/06/2017.
 */
import {Injectable} from '@angular/core';
import {Headers, Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

import {BucketListItem} from "./bucket-list-item";
import {BucketListResponse} from "./bucket-list-response";
import {toPromise} from "rxjs/operator/toPromise";

@Injectable()
export class BucketListService {

  private bucketListUrl='http://localhost:8080/bucketlist';

  constructor(private http:Http){}

  getBucketList():Promise<BucketListItem[]>{
    //return Promise.resolve(BUCKETLIST);
    return this.http.get(this.bucketListUrl).toPromise().then(response=>response.json().bucketList as BucketListItem[]).catch(this.handleError);
  }

  private handleError(error: any):Promise<any>{
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getListItem(id:number):Promise<BucketListItem>{
    return this.getBucketList().then(bucketList=>bucketList.find(listItem=>listItem.itemId===id));
  }

  private headers = new Headers({'Content-Type':'application/json'});

  update(bucketListItem:BucketListItem):Promise<BucketListItem>{
    const url = this.bucketListUrl + '/' + bucketListItem.itemId;
    return this.http.put(url, JSON.stringify(bucketListItem), {headers:this.headers})
      .toPromise().then(()=>bucketListItem).catch(this.handleError);
  }

  create(title:string,description:string):Promise<BucketListItem>{
    return this.http.post(this.bucketListUrl,JSON.stringify({title:title,description:description}),{headers:this.headers})
      .toPromise().then(res=>res.json().data as BucketListItem).catch(this.handleError);
  }

  delete(itemId:number):Promise<void>{
    return this.http.delete(this.bucketListUrl+ '/'+itemId).toPromise().then(()=>null).catch(this.handleError);
  }
}
