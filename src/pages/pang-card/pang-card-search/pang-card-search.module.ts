import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PangCardSearchPage } from './pang-card-search';

@NgModule({
  declarations: [
    PangCardSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(PangCardSearchPage),
  ],
})
export class PangCardSearchPageModule {}
