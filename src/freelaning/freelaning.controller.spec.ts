import { Test, TestingModule } from '@nestjs/testing';
import { FreelaningController } from './freelaning.controller';
import { FreelaningService } from './freelaning.service';

describe('FreelaningController', () => {
  let controller: FreelaningController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FreelaningController],
      providers: [FreelaningService],
    }).compile();

    controller = module.get<FreelaningController>(FreelaningController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
