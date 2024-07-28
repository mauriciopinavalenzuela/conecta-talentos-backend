import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OfertasController } from './ofertas/ofertas.controller';
import { OfertasService } from './ofertas/ofertas.service';

@Module({
  imports: [],
  controllers: [AppController, OfertasController],
  providers: [AppService, OfertasService],
})
export class AppModule {}
