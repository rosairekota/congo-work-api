import { Module, NestMiddleware, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AppController } from './app.controller';
import { ArticleModule } from './post/article.module';
import { ProfileModule } from './profile/profile.module';
import { TagModule } from './tag/tag.module';
import { UserModule } from './auth/user.module';
import { FreelancerModule } from './freelancer/freelancer.module';
import { CustomerModule } from './customer/customer.module';
import { ProjectModule } from './project/project.module';
import { FreelaningModule } from './matching/freelaning.module';
import { SkillModule } from './skill/skill.module';
import { CandidatureModule } from './candidature/candidature.module';

import config from "../config/mikro-orm.config";
import { HelmetMiddleware } from '@nest-middlewares/helmet';

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
    FreelancerModule,
    CustomerModule,
    ProjectModule,
    FreelaningModule,
    SkillModule,
    CandidatureModule,
  ],
  providers: [],
})
export class AppModule implements NestModule{ 
  configure(consummer:MiddlewareConsumer){
    // xss protected=helmet middleware
    consummer.apply(HelmetMiddleware).forRoutes('')
  }
}
