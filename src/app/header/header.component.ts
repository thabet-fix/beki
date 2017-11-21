import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Beki } from '../gestion-beki/beki.model';
import { BekiService } from '../gestion-beki/beki.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  beki: Beki;
  constructor(private bekisService: BekiService) { }

  ngOnInit() {
  	this.beki = this.bekisService.getBeki(2);
  }

}
