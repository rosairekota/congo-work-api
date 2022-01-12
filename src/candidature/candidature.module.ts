import { Module } from '@nestjs/common';
import { CandidatureService } from './candidature.service';
import { CandidatureController } from './candidature.controller';

@Module({
  controllers: [CandidatureController],
  providers: [CandidatureService]
})
export class CandidatureModule {}
