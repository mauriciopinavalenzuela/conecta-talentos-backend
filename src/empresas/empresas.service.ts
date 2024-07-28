import { Injectable } from '@nestjs/common';
import { Empresa } from 'src/models/empresa';  

@Injectable()
export class EmpresasService {
    private empresas: Empresa[] = [];

    constructor() {
        this.empresas.push(
            new Empresa(
                'TechCorp',  
                'Tecnología',  
                'San Francisco, CA',  
                'Grande',
                'https://www.techcorp.com'
            )
        );
    }

    crearEmpresa(empresa: Empresa): Empresa {
        let empresaExistente = false;
        
        for (const e of this.empresas) {
            if (e.nombre === empresa.nombre && e.sector === empresa.sector) {
                empresaExistente = true;
                break;
            }
        }

        if (empresaExistente) {
            return null;
        } else {
    
            empresa.id = this.empresas.length + 1;
            this.empresas.push(empresa);
            return empresa;
        }
    }

    obtenerTodasLasEmpresas(): Empresa[] {
        return this.empresas;
    }
}
