import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SideNavbarService } from "app/subapp/side-navbar.service";

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {
  public collaseBrandList = true;
  public collasePriceRangeList = true;
  isSignedIn = true;
  navData = {
    categories: [
      { label: 'Business', link: '/apps/category/Business'},
      { label: 'Finance', link: '/apps/category/Finance'},
      { label: 'Employee', link: '/apps/category/Employee'},
      { label: 'Report', link: '/apps/category/Report'}
     ]
    };
  constructor(private sideNabarService: SideNavbarService,
  private router: Router) { }

  ngOnInit() {
    this.sideNabarService.sideNavbarToggele.subscribe((val) => {

    });
  }

  toggleCollaseBrandList() {
    this.collaseBrandList = !this.collaseBrandList
  }

  toggleCollasePriceRangeList () {
    this.collasePriceRangeList = !this.collasePriceRangeList;
  }

  dashboardClick() {
    this.router.navigate(["/dashboard"]);
  }

}
