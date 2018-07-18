import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsersPage } from '../pages/users/users';
import { UserPage } from '../pages/users/user/user';
import { NotificationsPage } from '../pages/notifications/notifications';
import { InboxPage } from '../pages/inbox/inbox';
import { ActionsPage } from '../pages/actions/actions';
import { SearchPage } from '../pages/search/search';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AccountPage } from '../pages/account/account';
import { PaymentPage } from '../pages/payment/payment';
import { FeedbackPage } from '../pages/feedback/feedback';
import { ReportPage } from '../pages/report/report';
import { AuthService } from '../services/auth';




@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    UsersPage,
    UserPage,
    ActionsPage,
    InboxPage,
    NotificationsPage,
    SearchPage,
    LoginPage,
    SignupPage,
    AccountPage,
    PaymentPage,
    FeedbackPage,
    ReportPage
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    UsersPage,
    UserPage,
    ActionsPage,
    InboxPage,
    NotificationsPage,
    SearchPage,
    LoginPage,
    SignupPage,
    AccountPage,
    PaymentPage,
    FeedbackPage,
    ReportPage
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
