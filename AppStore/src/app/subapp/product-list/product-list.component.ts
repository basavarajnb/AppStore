import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { SideNavbarService } from 'app/subapp/side-navbar.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductListService } from 'app/subapp/product-list/services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  appsList: Array<AppDetail> = new Array<AppDetail>();
  categoryName: string;

  constructor(private activatedRoute: ActivatedRoute,
    private productListService: ProductListService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.categoryName = params['category'];
      let categoryName2 = this.categoryName.toLocaleLowerCase();
      if (categoryName2) {
        this.productListService.getCategoryAppList(categoryName2).subscribe((appsList) => {
          this.setProductList(appsList);
        });
        console.log('categoryName Name is  ' + categoryName2);
      }
    });
  }

  setProductList = (productListArray) => {
    productListArray.forEach(element => {
      this.appsList.push(element);
    });
  }

  toggleSortLatest() {

  }

  toggleSortRating() {
    
  }
}

export class AppDetail {
  id: string;
  name: string;
  desc: string;
  imageUrl: string;
  updated: string;
}
