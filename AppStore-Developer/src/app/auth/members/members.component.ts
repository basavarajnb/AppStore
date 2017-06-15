import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { LoginChangesService } from 'app/services/login-changes.service';
import { UserAuthService } from 'app/services/user.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit, OnDestroy {

  name: any;
  state = '';

  constructor(private router: Router,
    private userAuthService: UserAuthService) {
  }

  logout() {
    this.userAuthService.isUserSignedIn = false;
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
    console.log('MembersComponent OnInit');
    if (this.userAuthService.isUserSignedIn === false) {
      this.router.navigateByUrl('/login');
    }
  }

  ngOnDestroy(): void {
  }
}
