import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-gestion-beki',
  templateUrl: './gestion-beki.component.html',
  styleUrls: ['./gestion-beki.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GestionBekiComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
  	//this.user = this.userService.getUser(2);
  }

}
