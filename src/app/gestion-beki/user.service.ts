import  { User } from './user.model';

export class UserService{
	private users: User[] = [
		new User(0,10,'Thabet','Jmal', '22471859','Route saltnia km4'),
		new User(1,6,'Dupon','Angelo', '22333444','Route Matar km3'),
		new User(2,6.5,'David','Piska', '22555222','Route Taniour km12'),
		new User(3,15,'Abraham','Mytho', '22111666','Route Gremda km2')
	];

	constructor() {}

	getUsers(){
		return this.users;
	}
	/*getUser(id: number){
		return this.users[id];
	}*/

	getUser(id: number) {
    return this.users[id];
  }

}
