import { Body, Controller, Post, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { OfertasLaboralesService } from './ofertas.service';  
import { OfertaLaboral } from 'src/models/ofertaLaboral';  

@Controller('ofertas')
export class OfertasLaboralesController {
    constructor(private readonly ofertasService: OfertasLaboralesService) {}

    @Post()
    crearOfertaLaboral(
        @Body() oferta: OfertaLaboral,
        @Res() response: Response
    ) {
        const nuevaOferta = this.ofertasService.crearOfertaLaboral(oferta);
        
        if (nuevaOferta) {
            response.status(201).send(nuevaOferta);
        } else {
            response.status(400).send({ error: 'La oferta laboral ya existe' });
        }
    }

    @Get()
    obtenerTodasLasOfertas(@Res() response: Response) {
        const ofertas = this.ofertasService.obtenerTodasLasOfertas();
        response.status(200).send(ofertas);
    }
}
