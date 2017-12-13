import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'PangCardPage';
  tab3Root = 'SettleAccountsPage';
  tab4Root = 'BillPage';
  tab5Root = 'MinePage';

  constructor() {

  }
}
