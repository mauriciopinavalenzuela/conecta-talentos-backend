import { Estudiante } from './Estudiante';  
import { OfertaLaboral } from './OfertaLaboral';  

export class Postulacion {
    estudiante: Estudiante;
    oferta: OfertaLaboral;
    fecha: string;
    estado: string;

    constructor(estudiante: Estudiante, oferta: OfertaLaboral, fecha: string, estado: string) {
        this.estudiante = estudiante;
        this.oferta = oferta;
        this.fecha = fecha;
        this.estado = estado;
    }
}
