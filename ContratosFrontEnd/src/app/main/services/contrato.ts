import {Contratante} from "../components/entidadContratante/service/contratante";
import {Autoridad} from "../components/entidadAutoridad/service/autoridad";

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
