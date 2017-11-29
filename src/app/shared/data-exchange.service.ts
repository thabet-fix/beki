import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';

import {UserService} from '../gestion-beki/user.service';
import {User} from '../gestion-beki/user.model';


@Injectable()
export class DataExchangeService{
  constructor(private http: Http, private firebase: AngularFireDatabase, private userService: UserService) {
    this.getUserBeki();
  }


  usertmp: User;
  userListDB: AngularFireList<any>;
  userDB: AngularFireObject<any>;
  getBekiUser: number;
  bekitmp: number;

  /*storeUsers() {
    return this.http.put('https://beki-20edd.firebaseio.com/beki.json', this.userService.getUsers());
  }

  storeUser(userId: number) {
    console.log(JSON.stringify(this.userService.getUser(userId)));
    return this.http.post('https://beki-20edd.firebaseio.com/beki.json', JSON.stringify(this.userService.getUser(userId)))
      .map(res => res.json());

  }*/

  updateUser(userIdToUpdate: number, bekiToUpdate: number) {
    this.userListDB = this.firebase.list('beki');
    this.bekitmp = this.getBekiUser - bekiToUpdate;
    console.log(this.bekitmp);
    this.userListDB.update("-KzyN0fVx5Ccl5CRSvNo", {
      "id": 4,
      "beki": this.bekitmp,
      "firstName": "fromdb",
      "name": "database",
      "tel": "11111111",
      "adresse": "Route Matar km9"
    })
  }

  addUser() {
    this.userListDB = this.firebase.list('beki');
    this.userListDB.push({
      "id": 4,
      "beki": 23,
      "firstName": "fromdb",
      "name": "database",
      "tel": "11111111",
      "adresse": "Route Matar km9"
    })
  }

  getUsers() {
    return this.userListDB = this.firebase.list('beki');
  }

  getUser() {
    return this.userDB = this.firebase.object('beki/-KzyN0fVx5Ccl5CRSvNo');
  }

  getUserBeki() {
    this.firebase.object('beki/-KzyN0fVx5Ccl5CRSvNo')
      .snapshotChanges().subscribe(
        element =>{
          var userDBJSON = element.payload.toJSON();
          userDBJSON["$key"] = element.key;
          this.usertmp = userDBJSON as User;
          this.getBekiUser = this.usertmp.beki;
        }
      )
    return this.getBekiUser;
  }
}
