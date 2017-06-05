import {BucketListItem} from "./bucket-list-item";
/**
 * Created by ydong05 on 03/06/2017.
 */
export class BucketListResponse{
  private _bucketList:BucketListItem[];
  private _count:number;


  get bucketList(): BucketListItem[] {
    return this._bucketList;
  }

  get count(): number {
    return this._count;
  }
}
