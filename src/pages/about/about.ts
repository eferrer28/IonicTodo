import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  title;
  description;
  public items = [];
  //public todo: Array<any>;


  constructor(public navCtrl: NavController, public storage: Storage) {
  }
  addTask(){
    let newTask = {
      title: this.title,
      description: this.description
    };
    this.items.push(newTask);
  //this.navCtrl.push(HomePage, newTask)
  console.log(newTask.title);
  console.log(newTask);
  console.log(  JSON.stringify(this.items));
  this.storage.set("thelist", JSON.stringify(this.items));

  }


}
