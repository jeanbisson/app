import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { AuthService } from '../../services/auth';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  tabsPage= TabsPage;
  signupPage = SignupPage
  constructor(public navCtrl: NavController, 
              private authService: AuthService,
              private loadingCtrl: LoadingController,
            private alertCtrl: AlertController) {

  }

  password_type: string = 'password';


  onLogin(form: NgForm){
    const loading = this.loadingCtrl.create({
      content: 'Login in...'
    });
    loading.present();

    this.authService.login(form.value.email, form.value.password)
      .then(data => {
        loading.dismiss();
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Login failed!',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      })
  }
  togglePasswordMode() {  
    this.password_type === 'text' ? 'password' : 'text';
  }

  onGoToPage(page:any) {
    this.navCtrl.push(page);
  }


}
