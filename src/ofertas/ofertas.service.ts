import { Injectable } from '@nestjs/common';
import { Empresa } from 'src/models/empresa';  
import { OfertaLaboral } from 'src/models/ofertaLaboral';  

@Injectable()
export class OfertasLaboralesService {
    private ofertas: OfertaLaboral[] = [];

    constructor() {
        this.ofertas.push(
            new OfertaLaboral(
                'Desarrollador Backend',
                'Desarrollador Backend con experiencia en Node.js.',
                new Empresa(
                    'TechCorp',
                    'Tecnología',
                    'San Francisco, CA',
                    'Grande',
                    'https://www.techcorp.com'
                ),
                90000,
                '2024-07-01'
            )
        );
    }

    crearOfertaLaboral(oferta: OfertaLaboral): OfertaLaboral {
        let ofertaExistente = false;
      
        for (const o of this.ofertas) {
            if (o.titulo === oferta.titulo && o.empresa.nombre === oferta.empresa.nombre) {
                ofertaExistente = true;
                break;
            }
        }

        if (ofertaExistente) {
            return null;
        } else {

            oferta.id = this.ofertas.length + 1;
            this.ofertas.push(oferta);
            return oferta;
        }
    }

    obtenerTodasLasOfertas(): OfertaLaboral[] {
        return this.ofertas;
    }
}
