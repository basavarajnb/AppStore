import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { SideNavbarService } from 'app/subapp/side-navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  categories = [
    {
      categoryTitle: "Business",
      categoryImageUrl: "assets/images/business.png"
    },
    {
      categoryTitle: "Finance",
      categoryImageUrl: "assets/images/finance.png"
    },
    {
      categoryTitle: "Employee",
      categoryImageUrl: "assets/images/employee.png"
    },
    {
      categoryTitle: "Report",
      categoryImageUrl: "assets/images/report.png"
    }
  ];

  constructor(private sideNabarService: SideNavbarService) { }

  ngOnInit() {
    
  }



  
}
