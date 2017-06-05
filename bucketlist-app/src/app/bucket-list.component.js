"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var bucket_list_service_1 = require("./bucket-list.service");
/*export class BucketListItem{
  id: number;
  title: string;
  destination: string;
  accomplished: boolean;
  accomplishedDate:string;
}*/
var BucketListComponent = (function () {
    function BucketListComponent(bucketListService, router) {
        this.bucketListService = bucketListService;
        this.router = router;
        this.title = 'Destination List!!!';
        this.name = 'Yi';
    }
    BucketListComponent.prototype.onSelect = function (listItem) {
        this.selectedListItem = listItem;
    };
    BucketListComponent.prototype.ngOnInit = function () {
        this.getBucketList();
    };
    BucketListComponent.prototype.getBucketList = function () {
        var _this = this;
        this.bucketListService.getBucketList().then(function (bucketList) { return _this.bucketList = bucketList; });
    };
    BucketListComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedListItem.id]);
    };
    return BucketListComponent;
}());
BucketListComponent = __decorate([
    core_1.Component({
        selector: 'my-list',
        templateUrl: './bucket-list.component.html',
        styleUrls: ['./bucket-list.component.css'],
        providers: [bucket_list_service_1.BucketListService]
    })
], BucketListComponent);
exports.BucketListComponent = BucketListComponent;
