import { MyJobPage } from './../my-job/my-job';
import { ChatPage } from './../chat/chat';
import { Component } from '@angular/core';
import { ProfilePage } from './../profile/profile';
import { HomePage } from '../home/home';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ProfilePage;
  tab3Root: any = ChatPage;
  tab4Root: any = MyJobPage;

  constructor() {

  }
}
