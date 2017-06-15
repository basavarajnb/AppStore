import { UserAuthService } from 'app/services/user.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        private userAuthService: UserAuthService) { }

    canActivate(): Observable<boolean> {
        let isUserSignedIn;
        if (typeof (Storage) !== undefined) {
            // Code for localStorage/sessionStorage.
            isUserSignedIn = localStorage.isUserSignedIn;
        } else {
            // Sorry! No Web Storage support..
        }
        if (isUserSignedIn === "true") {
            return Observable.of(true);
        } else {
            console.log('not auth');
            this.router.navigate(['/login']);
            return Observable.of(false);
        }
    }
}