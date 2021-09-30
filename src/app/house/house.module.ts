import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HousePage } from './house.page';
import { HousePageRoutingModule } from './house-routing.module';

// Imort search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HousePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [HousePage]
})

export class HousePageModule {}