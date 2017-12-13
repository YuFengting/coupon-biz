import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PangCardPage } from './pang-card';

@NgModule({
  declarations: [
    PangCardPage,
  ],
  imports: [
    IonicPageModule.forChild(PangCardPage),
  ],
})
export class PangCardPageModule {}
