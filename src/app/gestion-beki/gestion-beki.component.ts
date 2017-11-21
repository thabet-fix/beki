import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Beki } from './beki.model';
import { BekiService } from './beki.service';

@Component({
  selector: 'app-gestion-beki',
  templateUrl: './gestion-beki.component.html',
  styleUrls: ['./gestion-beki.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GestionBekiComponent implements OnInit {
  beki: Beki;
  constructor(private bekisService: BekiService) { }

  ngOnInit() {
  	this.beki = this.bekisService.getBeki(2);
  }

}
