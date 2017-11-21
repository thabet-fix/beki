import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GestionBekiComponent }      from './gestion-beki/gestion-beki.component';
import { RecevoirBekiComponent }      from './gestion-beki/recevoir-beki/recevoir-beki.component';
import { EnvoyerBekiComponent }      from './gestion-beki/envoyer-beki/envoyer-beki.component';

 
const routes: Routes = [
  { path: '', redirectTo: '/mon-beki', pathMatch: 'full' },
  { path: 'mon-beki', component: GestionBekiComponent },
  { path: 'recevoir-beki', component: RecevoirBekiComponent },
  { path: 'envoyer-beki', component: EnvoyerBekiComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}