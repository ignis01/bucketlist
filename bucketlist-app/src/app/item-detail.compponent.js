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
require("rxjs/add/operator/switchMap");
var ItemDetailComponent = (function () {
    function ItemDetailComponent(bucketListService, route, location) {
        this.bucketListService = bucketListService;
        this.route = route;
        this.location = location;
    }
    ;
    ItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.bucketListService.getListItem(+params['id']); })
            .subscribe(function (item) { return _this.item = item; });
    };
    ItemDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return ItemDetailComponent;
}());
__decorate([
    core_1.Input()
], ItemDetailComponent.prototype, "item", void 0);
ItemDetailComponent = __decorate([
    core_1.Component({
        selector: 'item-detail',
        templateUrl: './item-detail.component.html',
        styleUrls: ['./item-detail.component.css']
    })
], ItemDetailComponent);
exports.ItemDetailComponent = ItemDetailComponent;
