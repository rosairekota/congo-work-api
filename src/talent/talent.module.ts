import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Talent } from './entities/talent.entity';
import { Module } from '@nestjs/common';
import { TalentService } from './talent.service';
import { TalentController } from './talent.controller';

@Module({
  imports: [ MikroOrmModule.forFeature({ entities: [Talent] })],
  controllers: [TalentController],
  providers: [TalentService]
})
export class TalentModule {}
