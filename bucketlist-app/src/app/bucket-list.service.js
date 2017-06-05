"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by ydong05 on 01/06/2017.
 */
var core_1 = require("@angular/core");
var mock_bucket_list_1 = require("./mock-bucket-list");
var BucketListService = (function () {
    function BucketListService() {
    }
    BucketListService.prototype.getBucketList = function () {
        return Promise.resolve(mock_bucket_list_1.BUCKETLIST);
    };
    BucketListService.prototype.getListItem = function (id) {
        return this.getBucketList().then(function (bucketList) { return bucketList.find(function (listItem) { return listItem.id === id; }); });
    };
    return BucketListService;
}());
BucketListService = __decorate([
    core_1.Injectable()
], BucketListService);
exports.BucketListService = BucketListService;
