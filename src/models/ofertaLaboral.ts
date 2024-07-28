import { Empresa } from './empresa';  

export class OfertaLaboral {
    id: number;  
    titulo: string;
    descripcion: string;
    empresa: Empresa;
    salario: number;
    fechaPublicacion: string;

    constructor(
        titulo: string,
        descripcion: string,
        empresa: Empresa,
        salario: number,
        fechaPublicacion: string
    ) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.empresa = empresa;
        this.salario = salario;
        this.fechaPublicacion = fechaPublicacion;
    }
}
