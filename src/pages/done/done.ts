import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeliveryDoneServiceProvider } from '../../providers/deliverydoneservice/deliverydoneservice';

@Component({
  selector: 'page-done',
  templateUrl: 'done.html'
})
export class DonePage {

    errorMessage: string;
    countries: string[];

    constructor(public navCtrl: NavController, public rest: DeliveryDoneServiceProvider) {

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
