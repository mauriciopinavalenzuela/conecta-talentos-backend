import { Test, TestingModule } from '@nestjs/testing';
import { TalentosController } from './talentos.controller';

describe('TalentosController', () => {
  let controller: TalentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TalentosController],
    }).compile();

    controller = module.get<TalentosController>(TalentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
