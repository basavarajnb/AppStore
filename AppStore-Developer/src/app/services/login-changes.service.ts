import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";
import { Subject } from "rxjs/Subject";

@Injectable()
export class LoginChangesService {
  loginChangesSubject = new BehaviorSubject<any>(false);
  signOutClickSubject = new Subject<Boolean>();

  constructor() { }

}
