import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TalentosController } from './talentos/talentos.controller';
import { TalentosService } from './talentos/talentos.service';
import { TalentosService } from './talentos/talentos.service';
import { TalentosController } from './talentos/talentos.controller';

@Module({
  imports: [],
  controllers: [AppController, TalentosController],
  providers: [AppService, TalentosService],
})
export class AppModule {}
