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
      { label: 'All', link: '/apps/category/All' },
      { label: 'Uploaded', link: '/apps/category/Uploaded' },
      { label: 'Approved', link: '/apps/category/Approved' },
      { label: 'Rejected', link: '/apps/category/Rejected' }
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

  toggleCollasePriceRangeList() {
    this.collasePriceRangeList = !this.collasePriceRangeList;
  }

  dashboardClick() {
    this.router.navigate(["/dashboard"]);
  }

  uploadClick() {
    this.router.navigate(["/upload"]);
  }

  statisticsClick() {
    this.router.navigate(["/statistics"]);
  }
}
