import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { User } from '../gestion-beki/user.model';
import { UserService } from '../gestion-beki/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
  	this.user = this.userService.getUser(2);
  }

}
