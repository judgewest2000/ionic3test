import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { ConfigHelper } from '../helpers/config-helper';
import { ILogin } from '../modelInterfaces/ILogin';

import { KeyValueService } from './key-value-service';

/*
  Generated class for the LoginService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginService {

  constructor(private http: Http, private keyValueService: KeyValueService) {
  }

  private performLogin(username: string, password: string) {
    return new Promise<ILogin>(resolve => {

      const headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      var body = `userName=${username}&password=${password}&grant_type=password`;

      var url = ConfigHelper.getApiUrl() + '/token';

      this.http.post(url, body, { headers: headers })
        .map(res => <ILogin>res.json())
        .subscribe(data => {
          resolve(data);
        });

    });
  }

  async login(username: string, password: string) {
    
    const loginDetail = await this.performLogin(username, password);

    await this.keyValueService.set('login', loginDetail);

    return loginDetail;
  }

}
