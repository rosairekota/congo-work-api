import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Project } from './entities/project.entity';
import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';

@Module({
  imports: [ MikroOrmModule.forFeature({ entities: [Project] })],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {}
