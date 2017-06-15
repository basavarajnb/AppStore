import { SideNavbarService } from './subapp/side-navbar.service';
import { Component, ViewChild, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.sideNabarService.sideNavbarToggele.subscribe((val) => {
      this.sidenav.toggle();
    });
  }

  @ViewChild("sidenav") sidenav;
  navBarMode = "side";

  title = 'app works!';
  brandName = 'App Store';
  constructor(private sideNabarService: SideNavbarService) {
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    let width = event.target.innerWidth;
    if (width <= 768) {
      this.navBarMode = 'over';
    }
    else if (width > 768) {
      this.navBarMode = 'side';
    }
  }


}
