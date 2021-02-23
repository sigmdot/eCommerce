import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarrosuelComponent } from './components/carrosuel/carrosuel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CarrosuelComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    CarrosuelComponent,
    FormsModule,
    FontAwesomeModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
  ]
})
export class SharedModule { }
