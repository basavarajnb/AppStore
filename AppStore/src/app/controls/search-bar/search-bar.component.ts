import { SideNavbarService } from './../../subapp/side-navbar.service';
import { Router, NavigationStart } from '@angular/router';
import { Component, OnInit, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {


  showSearchBar = true;
  constructor(private router: Router,
    private sideNabarService: SideNavbarService) { }

  toggleSidebar() {
    this.sideNabarService.sideNavbarToggele.next('');
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.url === "/login") {
          this.showSearchBar = false;
        } else {
          this.showSearchBar = true;
        }
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  onSearchClick(value) {
    alert("Search for " + value);
  }

  

}
