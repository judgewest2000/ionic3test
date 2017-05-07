import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { ConfigHelper } from '../helpers/config-helper';
import { LoginService } from './login-service';


@Injectable()
export class DataAccessService {

  constructor(private http: Http, private loginService: LoginService) { }

  private async getHeaders() {
    const headers = new Headers();

    let authToken = await this.loginService.getAuthToken();

    headers.append('Authorization', `Bearer ${authToken}`);
    return headers;
  }

  private getApiUrl(endPoint: string) {
    return `${ConfigHelper.getApiUrl()}/api/${endPoint}`;
  }

  async post<T>(endPoint: string, params: any) {

    const headers = await this.getHeaders();

    headers.append('Content-Type', 'application/json');

    const apiUrl = this.getApiUrl(endPoint);

    let paramToPass = JSON.stringify(params);

    let data = await this.http.post(apiUrl, paramToPass, { headers: headers })
      .toPromise();

    let tObj = data.json() as T;

    return tObj;

  }

  async get<T>(endPoint: string, params?: any) {

    let apiUrl = this.getApiUrl(endPoint);

    const headers = await this.getHeaders();
    headers.append('Content-Type', 'application/json');
    
    if (params !== undefined) {
      if (params.id !== undefined) {
        apiUrl += `/${params.id}`;
        delete params.id;
      }

      Object.keys(params).forEach((key, index) => {
        apiUrl += `${(index === 0) ? '?' : '&'}${key}:${params[key]}`;
      });
    }

    const data = await this.http.get(apiUrl, { headers: headers })
      .toPromise();

    const tObj = data.json() as T;

    return tObj;

  }

}
