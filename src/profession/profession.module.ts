import { Module } from '@nestjs/common';
import { ProfessionService } from './profession.service';
import { ProfessionController } from './profession.controller';
import { Profession } from './entities/profession.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [ MikroOrmModule.forFeature({ entities: [Profession] })],
  controllers: [ProfessionController],
  providers: [ProfessionService]
})
export class ProfessionModule {}
