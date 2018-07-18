import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AccountPage } from '../account/account';
import { PaymentPage } from '../payment/payment';
import { FeedbackPage } from '../feedback/feedback';
import { ReportPage } from '../report/report';

@Component({
  selector: 'page-actions',
  templateUrl: 'actions.html'
})
export class ActionsPage {
  accountPage = AccountPage;
  paymentPage = PaymentPage;
  feedbackPage = FeedbackPage;
  reportPage = ReportPage;

  constructor(public navCtrl: NavController) {

  }
//for some reason onGotoPage(page:any) would only work for account page and not the others....which is why I made 4 seperate functions..
  onGoToPage(page:any) {
    this.navCtrl.push(page);
  }

  onGotoPayment(){
    this.navCtrl.push(PaymentPage);
  }

  onGotoFeedback(){
    this.navCtrl.push(FeedbackPage);
  }

  onGotoReport(){
    this.navCtrl.push(ReportPage);
  }
 
}
