import { Module } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillController } from './skill.controller';
import { Skill } from './entities/skill.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [ MikroOrmModule.forFeature({ entities: [Skill] })],
  controllers: [SkillController],
  providers: [SkillService]
})
export class SkillModule {}
