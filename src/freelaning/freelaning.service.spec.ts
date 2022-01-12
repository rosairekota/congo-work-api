import { Test, TestingModule } from '@nestjs/testing';
import { FreelaningService } from './freelaning.service';

describe('FreelaningService', () => {
  let service: FreelaningService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FreelaningService],
    }).compile();

    service = module.get<FreelaningService>(FreelaningService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
