import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http";

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {GestionBekiComponent} from './gestion-beki/gestion-beki.component';


import {RecevoirBekiComponent} from './gestion-beki/recevoir-beki/recevoir-beki.component';
import {EnvoyerBekiComponent} from './gestion-beki/envoyer-beki/envoyer-beki.component';

import {UserService} from './gestion-beki/user.service';
import {DataExchangeService} from './shared/data-exchange.service';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyAR6e9inVCF0EBFO4YGmyEI4CuD8WwbK9M",
  authDomain: "beki-20edd.firebaseapp.com",
  databaseURL: "https://beki-20edd.firebaseio.com",
  projectId: "beki-20edd",
  storageBucket: "beki-20edd.appspot.com",
  messagingSenderId: "918484784562"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GestionBekiComponent,
    RecevoirBekiComponent,
    EnvoyerBekiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule

  ],
  providers: [UserService, DataExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
