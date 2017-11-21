import  { Beki } from './beki.model';

export class BekiService{
	private bekis: Beki[] = [
		new Beki(0,10),
		new Beki(1,15),
		new Beki(2,7),
		new Beki(3,22)
	];

	getBekis(){
		return this.bekis;
	}
	getBeki(id: number){
		return this.bekis[id];
	}
}