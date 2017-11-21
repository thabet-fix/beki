import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { UserService } from '../gestion-beki/user.service';
import { User } from '../gestion-beki/user.model';

@Injectable()
export class DataExchangeService {
	constructor(private http: Http, private userService: UserService){}
	storeBekies() {
    	return this.http.put('https://beki-20edd.firebaseio.com/beki.json', this.userService.getUsers());
  	}

}
