import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserPage } from './user/user';



@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  constructor(private navCtrl: NavController){  }

  onLoadUser(name: string) {
    this.navCtrl.push(UserPage, {userName: name});
  }

  goBack() {
    this.navCtrl.pop({ duration: 500, animation: "ios-transition", animate: true,  easing: 'ease-out', direction: 'back' });
  }
 
  ionViewCanEnter(): boolean | Promise<void> {

    console.log('ionViewCanEnter');
    const rnd =  Math.random();
    return rnd > 0.1;
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }

  ionViewCanLeave(): boolean | Promise<void> {
    console.log('ionViewCanLeave');
    const promise = new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve()
       } ,1);
    });   
    return promise;
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }

  ionViewWillUnload(){
    console.log('ionViewWillUnload');
  }

  ionViewDidUnload(){ //not sure this works
    console.log('ionViewDidUnload');
  }




}
