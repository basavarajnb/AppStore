import { Http, ResponseContentType } from '@angular/http';
import { UserAuthService } from 'app/services/user.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class FileService {

    constructor(private http: Http) { }

    downloadFile() {
        return this.http.get('assets/downloads/android/FISFramework.txt' ,
            { responseType: ResponseContentType.Blob })
            .map((res) => {
                return new Blob([res.blob()], { type: 'application/pdf' });
            });
    }
}


