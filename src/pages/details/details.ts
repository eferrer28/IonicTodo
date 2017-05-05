import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

  title;
  description;



  constructor(public navParams: NavParams, public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
  }




}
