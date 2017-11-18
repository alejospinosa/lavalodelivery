import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeliveryServiceProvider } from '../../providers/delivery-service/delivery-service';

@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html'
  //providers: [DeliveryServiceProvider]
})
export class TodoPage {

    errorMessage: string;
    countries: string[];

    constructor(public navCtrl: NavController, public rest: DeliveryServiceProvider) {

    }

    ionViewDidLoad() {
      this.getCountries();
    }

    getCountries() {
      this.rest.getCountries()
         .subscribe(
           mycountries => this.countries = mycountries,
           error =>  this.errorMessage = <any>error);
           console.log(this.countries);
    }
}
