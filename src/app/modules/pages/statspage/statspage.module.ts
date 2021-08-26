import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatspagePageRoutingModule } from './statspage-routing.module';

import { StatspagePage } from './statspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatspagePageRoutingModule
  ],
  declarations: [StatspagePage]
})
export class StatspagePageModule {}
