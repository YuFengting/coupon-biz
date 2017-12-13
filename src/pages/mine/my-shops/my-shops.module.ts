import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyShopsPage } from './my-shops';

@NgModule({
  declarations: [
    MyShopsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyShopsPage),
  ],
})
export class MyShopsPageModule {}
