import { Body, Controller, Post, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { EmpresasService } from './empresas.service';  
import { Empresa } from 'src/models/empresa';  

@Controller('empresas')
export class EmpresasController {
    constructor(private readonly empresasService: EmpresasService) {}

    @Post()
    crearEmpresa(
        @Body() empresa: Empresa,
        @Res() response: Response
    ) {
        const nuevaEmpresa = this.empresasService.crearEmpresa(empresa);
        
        if (nuevaEmpresa) {
            response.status(201).send(nuevaEmpresa);
        } else {
            response.status(400).send({ error: 'La empresa ya existe' });
        }
    }

    @Get()
    obtenerTodasLasEmpresas(@Res() response: Response) {
        const empresas = this.empresasService.obtenerTodasLasEmpresas();
        response.status(200).send(empresas);
    }
}
