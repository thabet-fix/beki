import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GestionBekiComponent } from './gestion-beki/gestion-beki.component';

import { AppRoutingModule }     from './app-routing.module';
import { RecevoirBekiComponent } from './gestion-beki/recevoir-beki/recevoir-beki.component';
import { EnvoyerBekiComponent } from './gestion-beki/envoyer-beki/envoyer-beki.component';

import { BekiService } from './gestion-beki/beki.service';
import { DataExchange } from './shared/data-exchange.service';

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
    FormsModule
  ],
  providers: [BekiService, DataExchange],
  bootstrap: [AppComponent]
})
export class AppModule { }
