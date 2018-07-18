import { Component } from '@angular/core';
import { NotificationsPage } from '../notifications/notifications';
import { InboxPage } from '../inbox/inbox';
import { ActionsPage } from '../actions/actions';
import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab2Root = HomePage;
  tab3Root = SearchPage;
  tab4Root = NotificationsPage;
  tab5Root = InboxPage;
  tab6Root = ActionsPage;

  constructor() {

  }
}
