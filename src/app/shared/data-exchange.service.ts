import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { BekiService } from '../gestion-beki/beki.service';
import { Beki } from '../gestion-beki/beki.model';

@Injectable()
export class DataExchangeService {
	constructor(private http: Http, private bekiService: BekiService){}
	storeBekies() {
    	return this.http.put('https://beki-20edd.firebaseio.com/beki.json', this.bekiService.getBekis());
  	}

}
