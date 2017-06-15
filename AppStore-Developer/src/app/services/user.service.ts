import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { AngularFire } from "angularfire2";
import { Router } from '@angular/router';

@Injectable()
export class UserAuthService {

    isUserSignedIn = false;
    loggedInSubject = new Subject<Boolean>();
    loggedOutSubject = new Subject<Boolean>();


    constructor(private router: Router) {
        if (localStorage.isUserSignedIn === "true") {
            this.isUserSignedIn = true;
        } else {
            this.isUserSignedIn = false;
        }
    }

    login() {
        this.isUserSignedIn = true;
        localStorage.setItem("isUserSignedIn", "true");
        this.router.navigate(['/dashboard']);

    }

    logout() {
        this.isUserSignedIn = false;
        console.log('logged out');
        localStorage.setItem("isUserSignedIn", "false");
        this.router.navigateByUrl('/');
    }

    isUserSignedInProp = () => {
        return this.isUserSignedIn;
    }

}