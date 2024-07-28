import { Body, Controller, Post, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { TalentosService } from './talentos.service';  
import { Talento } from 'src/models/talento';  

@Controller('talentos')
export class TalentosController {
    constructor(private readonly talentosService: TalentosService) {}

    @Post()
    crearTalento(
        @Body() talento: Talento,
        @Res() response: Response
    ) {
        const nuevoTalento = this.talentosService.crearTalento(talento);
        
        if (nuevoTalento) {
            response.status(201).send(nuevoTalento);
        } else {
            response.status(400).send({ error: 'El talento ya existe' });
        }
    }

    @Get()
    obtenerTodosLosTalentos(@Res() response: Response) {
        const talentos = this.talentosService.obtenerTodosLosTalentos();
        response.status(200).send(talentos);
    }
}
