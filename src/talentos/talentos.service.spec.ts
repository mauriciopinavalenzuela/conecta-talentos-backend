import { Test, TestingModule } from '@nestjs/testing';
import { TalentosService } from './talentos.service';

describe('TalentosService', () => {
  let service: TalentosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TalentosService],
    }).compile();

    service = module.get<TalentosService>(TalentosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
