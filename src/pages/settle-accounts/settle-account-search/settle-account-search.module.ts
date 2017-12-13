import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettleAccountSearchPage } from './settle-account-search';

@NgModule({
  declarations: [
    SettleAccountSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(SettleAccountSearchPage),
  ],
})
export class SettleAccountSearchPageModule {}
