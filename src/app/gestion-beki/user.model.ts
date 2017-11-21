export class User {
  public id: number;
  public beki: number;
  public firstName: string;
  public name: string;
  public tel: string;
  public adresse: string;


  constructor(id: number, beki: number, firstName: string, name: string, tel: string, adresse: string) {
  	this.id = id;
    this.beki = beki;
    this.firstName = firstName;
    this.name = name;
    this.tel = tel;
    this.adresse = adresse;
  }
}
