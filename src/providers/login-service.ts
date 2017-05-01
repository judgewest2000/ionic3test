import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { ConfigHelper } from '../helpers/config-helper';
import { ILogin } from '../modelInterfaces/ILogin';
import { KeyValueService } from './key-value-service';

const loginTokenKvp = 'logintoken';

interface LoginStatus {
  success: boolean;
  message?: string;
}

@Injectable()
export class LoginService {

  constructor(private http: Http, private keyValueService: KeyValueService) {
  }

  private async performLogin(username: string, password: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    var body = `userName=${username}&password=${password}&grant_type=password`;

    var url = ConfigHelper.getApiUrl() + '/token';

    const data = await this.http.post(url, body, { headers: headers })
      .toPromise();

    return data.json() as ILogin;

  }

  async login(username: string, password: string) {

    try {
      const loginDetail = await this.performLogin(username, password);
      await this.keyValueService.set(loginTokenKvp, loginDetail);

      return <LoginStatus>{
        success: true,
        message: 'Success'
      }

    } catch (caughtError) {

      let errorMessage = JSON.parse(caughtError._body).error_description;

      return <LoginStatus>{
        success: false,
        message: errorMessage
      }
    }

  }

  async isLoggedIn() {
    const loginToken = await this.keyValueService.get<ILogin>(loginTokenKvp);
    return loginToken !== null;
  }

  async logOut() {
    await this.keyValueService.remove(loginTokenKvp);
  }

  async getLoginUsername() {
    const loginToken = await this.keyValueService.get<ILogin>(loginTokenKvp);
    return loginToken.userName;
  }

}
