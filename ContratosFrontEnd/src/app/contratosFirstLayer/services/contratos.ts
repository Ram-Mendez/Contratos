export class Contratos {
  private id!: number;
  private nombre: string;
  private fechaCreacion: string;
  private entidadContratante: number;
  private entidadAutoridad: number;


  constructor(nombre: string, fechaCreacion: string, entidadContratante: number, entidadAutoridad: number) {
    this.nombre = nombre;
    this.fechaCreacion = fechaCreacion;
    this.entidadContratante = entidadContratante;
    this.entidadAutoridad = entidadAutoridad;
  }
}
