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
export class DeliveryDoneServiceProvider {
  private apiUrl = 'http://192.168.1.145:8100/deliverydone';
  //private apiUrl = 'https://www.lavalocolombia.com/inicio/delivery/scheduled';
  constructor(public http: Http) {
    console.log('Hello DeliveryDoneServiceProvider Provider');
  }
  getCountries(): Observable<string[]>{
    return this.http.get(this.apiUrl)
                    //.map(this.extractData)
                    .map((res: Response) => res.json());
  }
}
