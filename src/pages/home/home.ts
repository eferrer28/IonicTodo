import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../pages/about/about';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items: Array<any>;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.items = [
      {title: 'hi1', description: 'test1'},
      {title: 'hi2', description: 'test2'},
      {title: 'hi3', description: 'test3'}
    ];
  }
  viewDetails(){

  }

}
