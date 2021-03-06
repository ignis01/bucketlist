"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var item_detail_compponent_1 = require("./item-detail.compponent");
var bucket_list_component_1 = require("./bucket-list.component");
var app_component_1 = require("./app.component");
var bucket_list_service_1 = require("./bucket-list.service");
var dashboard_component_1 = require("./dashboard.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            bucket_list_component_1.BucketListComponent,
            item_detail_compponent_1.ItemDetailComponent,
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                {
                    path: 'bucketList',
                    component: bucket_list_component_1.BucketListComponent
                },
                {
                    path: 'dashboard',
                    component: dashboard_component_1.DashboardComponent
                },
                {
                    path: '',
                    redirectTo: '/dashboard',
                    pathMatch: 'full'
                },
                {
                    path: 'detail/:id',
                    component: item_detail_compponent_1.ItemDetailComponent
                }
            ])
        ],
        providers: [bucket_list_service_1.BucketListService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
