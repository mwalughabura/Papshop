import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiscoverBrandsPage } from './discover-brands';

@NgModule({
  declarations: [
    DiscoverBrandsPage,
  ],
  imports: [
    IonicPageModule.forChild(DiscoverBrandsPage),
  ],
})
export class DiscoverBrandsPageModule {}
