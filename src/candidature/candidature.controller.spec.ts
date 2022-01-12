import { Test, TestingModule } from '@nestjs/testing';
import { CandidatureController } from './candidature.controller';
import { CandidatureService } from './candidature.service';

describe('CandidatureController', () => {
  let controller: CandidatureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CandidatureController],
      providers: [CandidatureService],
    }).compile();

    controller = module.get<CandidatureController>(CandidatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
