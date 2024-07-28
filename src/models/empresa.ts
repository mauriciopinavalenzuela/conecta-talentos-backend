export class Empresa {
    id: number;  
    nombre: string;
    sector: string;
    ubicacion: string;
    tamano: string;
    website: string;

    constructor(nombre: string, sector: string, ubicacion: string, tamano: string, website: string) {
        this.nombre = nombre;
        this.sector = sector;
        this.ubicacion = ubicacion;
        this.tamano = tamano;
        this.website = website;
    }
}
