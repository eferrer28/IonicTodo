import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { AboutPage } from '../pages/about/about';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items: Array<any>;
  public ourlist = [];

  //public ourlist = [];



  constructor(public navCtrl: NavController, public storage: Storage) {

  }

  ionViewDidEnter(){
    console.log("HEY");
    this.items = [
      {title: 'hi1', description: 'test1'},
      {title: 'hi2', description: 'test2'},
      {title: 'hi3', description: 'test3'}
    ];
    this.storage.get('thelist').then(data => {
      console.log(data);
      this.ourlist = JSON.parse(data);
      console.log(this.ourlist);
    });
    //console.log(this.storage.get('the'))



  }
  viewDetails(){

  }

}
