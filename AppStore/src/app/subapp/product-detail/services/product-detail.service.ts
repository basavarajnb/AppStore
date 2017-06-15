import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";
import { Subject } from "rxjs/Subject";
import { Http } from "@angular/http";

@Injectable()
export class ProductDetailService {
    constructor(private http: Http) { }

    getProductById(productid: string, siteName: string) {
        return this.http.get("http://pricecompare/get-mobile-by-id.php" + "?id=" + productid + "&siteName=" + siteName)
            .map((productDetails) => {
                return productDetails.json();
            });
    }

    getProductHistory(productid: string, siteName: string) {
        return this.http.get("http://pricecompare/get-price-history.php" + "?id=" + productid + "&siteName=" + siteName)
            .map((productDetails) => {
                return productDetails.json();
            });
    }
}
