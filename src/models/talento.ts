export class Talento {
    id: number;
    nombre: string;
    habilidad: string;
    descripcion: string;

    constructor(id: number, nombre: string, habilidad: string, descripcion: string) {
        this.id = id;
        this.nombre = nombre;
        this.habilidad = habilidad;
        this.descripcion = descripcion;
    }
}
