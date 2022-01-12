import { Module } from '@nestjs/common';
import { FreelaningService } from './freelaning.service';
import { FreelaningController } from './freelaning.controller';

@Module({
  controllers: [FreelaningController],
  providers: [FreelaningService]
})
export class FreelaningModule {}
