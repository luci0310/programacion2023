import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//componentes globales 
import { SharedModule } from './shared/shared.module';

//importamos FIREBASE
import { environment } from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire/compat'; // CLOUD FIRESTORE
import {AngularFireAuthModule} from '@angular/fire/compat/auth'; //AUTENTIFICACION
import {AngularFireStorageModule} from '@angular/fire/compat/storage'; //IMAGENES 


//FIREBASE
//Nos conectamos a la BD; nos trae los modulos necesarios 


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
