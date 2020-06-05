import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '../bean/User';

@Injectable()
export class CallMicroservice {

  constructor(private httpClient: HttpClient) {
  }

  public getDataFromService(dataUrl: string, pParams = {}) {
    const headers = new HttpHeaders({
      // 'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': '*',
      'Content-Type': 'application/json'
    });

    // const params = new HttpParams(pParams);
    const user = new User();
    user.id = '1';
    user.name = 'w';
    return this.httpClient.post<User>(dataUrl, user, {headers});
  }
}
