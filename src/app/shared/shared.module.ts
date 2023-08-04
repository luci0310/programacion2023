import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

//material
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';



//componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    //componentes
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    //material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:  [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
