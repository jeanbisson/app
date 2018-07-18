import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tabs, NavController, LoadingController, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthService } from '../../services/auth';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  tabsPage = TabsPage
  constructor(public navCtrl: NavController, 
              private authService: AuthService, 
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) { }

  onSignup(form: NgForm){
    const loading = this.loadingCtrl.create({
      content: 'Signing you up...'
    });
    loading.present();
    this.authService.signup(form.value.email, form.value.password)
      .then(data => {
        loading.dismiss();
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Signup failed!',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });
    this.navCtrl.push(LoginPage);
    
  }

}
