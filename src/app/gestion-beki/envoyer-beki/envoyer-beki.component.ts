import {Component, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';


import {NgForm} from '@angular/forms';
import {DataExchangeService} from '../../shared/data-exchange.service';
import {UserService} from "../user.service";
import {User} from "../user.model";

import {Response} from '@angular/http';

@Component({
  selector: 'app-envoyer-beki',
  templateUrl: './envoyer-beki.component.html',
  styleUrls: ['./envoyer-beki.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EnvoyerBekiComponent implements OnInit {

  @ViewChild('f') formEnvoyer: NgForm;

  constructor(private dataExchange: DataExchangeService, private userService: UserService) {
  }

  ngOnInit() {

  }

  onSubmit() {
    this.onUpdateUserDB(2, this.formEnvoyer.value.montant);
    console.log(this.formEnvoyer.value.montant);

  }

  /*onAddUser(userId: number) {
    this.dataExchange.storeUser(userId)
      .subscribe(
        (user: User) => {
          console.log(user);
        }
      );
  }

  onSave() {
    this.dataExchange.storeUsers()
      .subscribe(
        (response: Response) => {
          const data = response.json();
          console.log(data);
        }
      );
  }*/

  onUpdateUserDB(userIdToUpdate: number, bekiToUpdate: number) {
    this.dataExchange.updateUser(userIdToUpdate, bekiToUpdate);
  }

  onGetUsers() {
    this.dataExchange.getUsers();
  }

  onAddUserDB() {
    this.dataExchange.addUser();
  }
}
