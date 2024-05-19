import {Contratante} from "./contratante";
import {Autoridad} from "./autoridad";

export class Contrato {
  constructor(id: number, nombre: string, fechaCreacion: Date, entidadContratante: Contratante, entidadAutoridad: Autoridad) {
    this.id = id;
    this.nombre = nombre;
    this.fechaCreacion = fechaCreacion;
    this.entidadContratante = entidadContratante;
    this.entidadAutoridad = entidadAutoridad;
  }

  id: number;
  nombre: string;
  fechaCreacion: Date;
  entidadContratante: Contratante
  entidadAutoridad: Autoridad;


}
