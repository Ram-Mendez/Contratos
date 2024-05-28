export class Autoridad {
  id: number;
  name: string;
  cifDni: string;
  address: string;
  municipality: string;
  zipCode: string;
  country: string;
  phone: string;

  constructor(id: number, name: string, cifDni: string, address: string, municipality: string, zipCode: string, country: string, phone: string) {
    this.id = id;
    this.name = name;
    this.cifDni = cifDni;
    this.address = address;
    this.municipality = municipality;
    this.zipCode = zipCode;
    this.country = country;
    this.phone = phone;
  }


}
