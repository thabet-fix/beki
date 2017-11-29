import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { User } from '../gestion-beki/user.model';
import { UserService } from '../gestion-beki/user.service';
import {DataExchangeService} from "../shared/data-exchange.service";

import {AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  user = this.userService.getUser(1);
  //user: User;
  userList: User[];
  constructor(private userService: UserService, private dataExchangeService: DataExchangeService) { }

  ngOnInit() {
    // this.userDB = this.dataExchangeService.getUser();
    this.getUser();
  }

  getUsers(){
    this.dataExchangeService.getUsers()
      .snapshotChanges().subscribe(
      item =>{
        this.userList = [];
        item.forEach(element =>{
          var usersDBJSON = element.payload.toJSON();
          usersDBJSON["$key"] = element.key;
          this.userList.push(usersDBJSON as User);
        })
      }
    )
  }

  getUser(){
    this.dataExchangeService.getUser()
      .snapshotChanges().subscribe(
      element =>{
        var userDBJSON = element.payload.toJSON();
        userDBJSON["$key"] = element.key;
        this.user = userDBJSON as User;
      }
    )
  }
}
