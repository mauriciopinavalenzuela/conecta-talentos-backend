export class Estudiante {
    nombre: string;
    edad: number;
    email: string;
    instituto: string;
    programa: string;
    anioDeIngreso: number;

    constructor(nombre: string, edad: number, email: string, instituto: string, programa: string, anioDeIngreso: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.instituto = instituto;
        this.programa = programa;
        this.anioDeIngreso = anioDeIngreso;
    }
}
