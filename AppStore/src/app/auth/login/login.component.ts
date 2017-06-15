import { UserAuthService } from 'app/services/user.service';
import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms/src/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {

  error: any;
  private subscription: Subscription = new Subscription();

  authenticatedFlag = false;


  formError: string;
  submitting = false;

  optFormFlag = false;
  signInForm = true;
  troubleFlag = false;


  optpasswordErrorFloag = false;
  eidErrorFlag = false;

  constructor(private router: Router,
    private userAuthService: UserAuthService) { }

  onSubmit(signInForm: NgForm) {

    if (signInForm.valid) {

      console.log('submitting...', signInForm);
      // this.submitting = true;
      this.eidErrorFlag = false;
      this.formError = null;
      this.signInForm = false;
      this.troubleFlag = false;
      this.optFormFlag = true;
      // this.userApi.signIn(signInForm.value.username, signInForm.value.password, signInForm.value.rememberMe)
      //   .subscribe((data) => {
      //     console.log('got valid: ', data);
      //     this.router.navigate(['/authenticated']);
      //   },
      //   (err) => {
      //     this.submitting = false;
      //     console.log('got error: ', err);
      //     this.formError = err;
      //   }
      //   );
    } else {
      this.eidErrorFlag = true;
      this.formError = 'EID is Required';
    }

  }

  onSubmitPassOPT(signInOTPForm: NgForm) {
    if (signInOTPForm.valid) {

      console.log('submitting...', signInOTPForm);
      // this.submitting = true;
      this.formError = null;
      this.optpasswordErrorFloag = false;
      this.authenticatedFlag = true;
      this.userAuthService.isUserSignedIn = true;
      if (this.authenticatedFlag === true) {
        localStorage.setItem("isUserSignedIn", "true");
        this.userAuthService.login();
      }

      // this.userApi.signIn(signInOTPForm.value.username, signInOTPForm.value.password, signInOTPForm.value.rememberMe)
      //   .subscribe((data) => {
      //     console.log('got valid: ', data);
      //     this.router.navigate(['/authenticated']);
      //   },
      //   (err) => {
      //     this.submitting = false;
      //     console.log('got error: ', err);
      //     this.formError = err;
      //   }
      //   );
    } else {
      this.optpasswordErrorFloag = true;
      this.formError = 'OTP or Password is Required';
    }

  }

  troubleClick() {
    this.signInForm = false;
    this.optFormFlag = false;
    this.troubleFlag = true;
  }

  troubleCancelClick() {
    this.signInForm = true;
    this.optFormFlag = false;
    this.troubleFlag = false;
  }

  ngOnInit() {
    if (localStorage.isUserSignedIn === "true") {
      this.userAuthService.login();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
