import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './home.component';
import { CarrosuelComponent } from '../components/carrosuel/carrosuel.component';

import {HomeRoutingModule} from './home-routing.module'


@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent,
    CarrosuelComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
