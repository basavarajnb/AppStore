import { Http, RequestOptions, Headers, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductDetailService } from "app/subapp/product-detail/services/product-detail.service";
import { FileService } from "app/services/file.service";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetails;
  constructor(private route: ActivatedRoute,
    private productDetailService: ProductDetailService,
    private fileService: FileService) { }

  ngOnInit() {

  }

  downloadClick() {
  this.fileService.downloadFile()
      .subscribe(res => {
         window['saveAs'](res, "InvoiceNo.pdf");
        let fileURL = URL.createObjectURL(res);
        window.open(fileURL);
      });
    this.downloadFile();
  }

downloadFile() {
  let fileUrl = `/downloads/android/FISFramework.css`;
  let blob = new Blob([fileUrl], { type: 'text/csv' });
  let url = window.URL.createObjectURL(blob);  window.open(url);

  window.open("assets/downloads/android/app-debug.apk");
  window["saveAs"]("assets/downloads/android/app-debug.apk");
}

  // downloadFile2(fileId: string): Observable<File> {
  //   let applicationsUrl = `/downloads/android/FISFramework.css`;

  //   var blob = new Blob([data], { type: 'text/csv' });
  //   var url = window.URL.createObjectURL(blob);
  //   window.open(url);
  // }

}
