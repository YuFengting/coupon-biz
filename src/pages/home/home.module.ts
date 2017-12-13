import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { HomePage } from '../home/home';                 //首页

@NgModule({
  imports: [IonicPageModule.forChild(HomePage)],
  declarations: [HomePage],
  providers: [],
})
export class HomePageModule {}

