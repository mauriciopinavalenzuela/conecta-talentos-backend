import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresasController } from './empresas/empresas.controller';
import { EmpresasService } from './empresas/empresas.service';

@Module({
  imports: [],
  controllers: [AppController, EmpresasController],
  providers: [AppService, EmpresasService],
})
export class AppModule {}
