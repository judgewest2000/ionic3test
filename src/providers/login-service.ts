import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginService {

  constructor(private http: Http) {
  }

  login(username: string, password: string) {

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    var body = `userName=${username}&password=${password}&grant_type=password`;

    var url = `https://baltictestapi.vuelio.co.uk/token`;

    return new Promise<string>(resolve => {

      this.http.post(url, body, { headers: headers })
        .map(res => res.json())
        .subscribe(data => {
            debugger;
            resolve('yay');
        });

    });


  }

}
