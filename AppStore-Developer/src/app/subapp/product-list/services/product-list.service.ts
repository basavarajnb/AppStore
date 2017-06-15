import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs/Rx";
import { Subject } from "rxjs/Subject";
import { Http } from "@angular/http";

@Injectable()
export class ProductListService {
    constructor(private http: Http) { }

    getBrandProductList(brandName: string) {
        return this.http.get("http://pricecompare/get-mobile-by-brand.php" + "?brand=" + brandName)
            .map((brandProductList) => {
                return brandProductList.json();
            });
    }

    getCategoryAppList(categoryName) {
        return Observable.of(this.appDetails);
    }


    appDetails = [
        {
            id: 'App Name',
            name: 'App Name',
            imageUrl: '../../../assets/images/logo83.png',
            productImageUrl: undefined,
            productUrl: '/app/appname',
            desc: 'Some description about the app',
            updated: 'now'
        },
        {
            id: 'App Name',
            name: 'App Name',
            imageUrl: '../../../assets/images/logo83.png',
            productImageUrl: undefined,
            productUrl: '/app/appname',
            desc: 'Some description about the app',
            updated: 'now'
        },
        {
            id: 'App Name',
            name: 'App Name',
            imageUrl: '../../../assets/images/logo83.png',
            productImageUrl: undefined,
            productUrl: '/app/appname',
            desc: 'Some description about the app',
            updated: 'now'
        },
        {
            id: 'App Name',
            name: 'App Name',
            imageUrl: '../../../assets/images/logo83.png',
            productImageUrl: undefined,
            productUrl: '/app/appname',
            desc: 'Some description about the app',
            updated: 'now'
        },
        {
            id: 'App Name',
            name: 'App Name',
            imageUrl: '../../../assets/images/logo83.png',
            productImageUrl: undefined,
            productUrl: '/app/appname',
            desc: 'Some description about the app',
            updated: 'now'
        },
        {
            id: 'App Name',
            name: 'App Name',
            imageUrl: '../../../assets/images/logo83.png',
            productImageUrl: undefined,
            productUrl: '/app/appname',
            desc: 'Some description about the app',
            updated: 'now'
        },
        {
            id: 'App Name',
            name: 'App Name',
            imageUrl: '../../../assets/images/logo83.png',
            productImageUrl: undefined,
            productUrl: '/app/appname',
            desc: 'Some description about the app',
            updated: 'now'
        },
        {
            id: 'App Name',
            name: 'App Name',
            imageUrl: '../../../assets/images/logo83.png',
            productImageUrl: undefined,
            productUrl: '/app/appname',
            desc: 'Some description about the app',
            updated: 'now'
        },
        {
            id: 'App Name',
            name: 'App Name',
            imageUrl: '../../../assets/images/logo83.png',
            productImageUrl: undefined,
            productUrl: '/app/appname',
            desc: 'Some description about the app',
            updated: 'now'
        },
        {
            id: 'App Name',
            name: 'App Name',
            imageUrl: '../../../assets/images/logo83.png',
            productImageUrl: undefined,
            productUrl: '/app/appname',
            desc: 'Some description about the app',
            updated: 'now'
        },
        {
            id: 'App Name',
            name: 'App Name',
            imageUrl: '../../../assets/images/logo83.png',
            productImageUrl: undefined,
            productUrl: '/app/appname',
            desc: 'Some description about the app',
            updated: 'now'
        },
    ];
}



