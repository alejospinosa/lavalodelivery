import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
  Generated class for the DeliveryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeliveryServiceProvider {
  private apiUrl = 'http://192.168.1.145:8100/delivery/';
  //private apiUrl = 'https://www.lavalocolombia.com/inicio/delivery/scheduled';
  constructor(public http: Http) {
    console.log('Hello DeliveryServiceProvider Provider');
  }
  getCountries(): Observable<string[]>{
    return this.http.get(this.apiUrl)
                    //.map(this.extractData)
                    .map((res: Response) => res.json());
  }



  // private extractData(res: Response) {
  //   let body = res;
  //   return body || { };
  // }
  //
  // private handleError (error: Response | any) {
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const err = error || '';
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }
}
