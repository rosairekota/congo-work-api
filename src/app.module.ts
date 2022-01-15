import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AppController } from './app.controller';
import { ArticleModule } from './post/article.module';
import { ProfileModule } from './profile/profile.module';
import { TagModule } from './tag/tag.module';
import { UserModule } from './auth/user.module';
import { ProjectModule } from './project/project.module';
import { SkillModule } from './skill/skill.module';

import config from "../config/mikro-orm.config";
import { HelmetMiddleware } from '@nest-middlewares/helmet';
import { TalentModule } from './talent/talent.module';
import { ClientModule } from './client/client.module';
import { ContactModule } from './contact/contact.module';
import { ProfessionModule } from './profession/profession.module';

@Module({
  controllers: [
    AppController,
  ],
  imports: [
    MikroOrmModule.forRoot(config),
    ArticleModule,
    UserModule,
    ProfileModule,
    TagModule,
    ProjectModule,
    SkillModule,
    TalentModule,
    ClientModule,
    ContactModule,
    ProfessionModule,
  ],
  providers: [],
})
export class AppModule implements NestModule{ 
  configure(consummer:MiddlewareConsumer){
    // xss protected=helmet middleware
    consummer.apply(HelmetMiddleware).forRoutes('')
  }
}
