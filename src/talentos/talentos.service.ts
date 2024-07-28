import { Injectable } from '@nestjs/common';
import { Talento } from 'src/models/talento';  

@Injectable()
export class TalentosService {
    private talentos: Talento[] = [];

    constructor() {
        this.talentos.push(
            new Talento(
                1,  
                'Juan Pérez', 
                'Programador',  
                'Desarrollador de software con 5 años de experiencia'  
            )
        );
    }

    crearTalento(talento: Talento): Talento {
        let talentoExistente = false;
        
        for (const t of this.talentos) {
            if (t.nombre === talento.nombre && t.habilidad === talento.habilidad) {
                talentoExistente = true;
                break;
            }
        }

        if (talentoExistente) {
            return null;
        } else {
            
            talento.id = this.talentos.length + 1;
            this.talentos.push(talento);
            return talento;
        }
    }

    obtenerTodosLosTalentos(): Talento[] {
        return this.talentos;
    }
}
