import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  todo = {}
  AddTask = 'Add Task';

  constructor(public navCtrl: NavController) {

  }
  addTask(){

  }


}
