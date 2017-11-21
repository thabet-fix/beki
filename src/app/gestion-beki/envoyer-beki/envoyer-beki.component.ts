import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Response } from '@angular/http';

import { NgForm } from '@angular/forms';
import { DataExchangeService } from '../../shared/data-exchange.service';

@Component({
  selector: 'app-envoyer-beki',
  templateUrl: './envoyer-beki.component.html',
  styleUrls: ['./envoyer-beki.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EnvoyerBekiComponent implements OnInit {
  
  @ViewChild('f') formEnvoyer: NgForm;

  constructor(private dataExchange: DataExchangeService) { }

  ngOnInit() {
  	
  }

  onSubmit(){
  	console.log(this.formEnvoyer.value.montant);
  }

  onSave(){
  	this.dataExchange.storeBekies()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }
}
