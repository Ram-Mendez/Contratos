export class NodeInput {

  id: number;
  parent: number;
  description: string;
  quantity: number;
  price: number;
  totalExclVat: number;
  totalInclVat: number;
  vat: number;


  constructor(id: number, parent: number, description: string, quantity: number, price: number, totalExclVat: number, totalInclVat: number, vat: number) {
    this.id = id;
    this.parent = parent;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
    this.totalExclVat = totalExclVat;
    this.totalInclVat = totalInclVat;
    this.vat = vat;
  }
}
