import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettleAccountsPage } from './settle-accounts';

@NgModule({
  declarations: [
    SettleAccountsPage,
  ],
  imports: [
    IonicPageModule.forChild(SettleAccountsPage),
  ],
})
export class SettleAccountsPageModule {}
