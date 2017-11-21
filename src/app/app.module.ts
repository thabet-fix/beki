import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GestionBekiComponent } from './gestion-beki/gestion-beki.component';


import { RecevoirBekiComponent } from './gestion-beki/recevoir-beki/recevoir-beki.component';
import { EnvoyerBekiComponent } from './gestion-beki/envoyer-beki/envoyer-beki.component';

import { UserService } from './gestion-beki/user.service';
import { DataExchangeService } from './shared/data-exchange.service';


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
  ],
  providers: [UserService, DataExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
