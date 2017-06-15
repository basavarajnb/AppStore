import { Component, OnInit, Input } from '@angular/core';
import { LoginChangesService } from "app/services/login-changes.service";
import { Router } from "@angular/router";
import { UserAuthService } from "app/services/user.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() brandName;
  socialIcons = [
    { imageFile: 'assets/images/social-fb-bw.png', alt: 'Facebook', link: 'http://www.facebook.com' },
    { imageFile: 'assets/images/social-google-bw.png', alt: 'Google +', link: 'http://www.google.com' },
    { imageFile: 'assets/images/social-twitter-bw.png', alt: 'Twitter', link: 'http://www.twitter.com' }
  ];
  constructor(public userAuthService: UserAuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onButtonClick() {
    alert("Return to Home");
  }
  onSignInClick() {
    this.router.navigateByUrl('/login');
  }
  onSignOutClick() {
    this.userAuthService.logout();
  }
}
