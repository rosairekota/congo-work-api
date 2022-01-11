import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { AppController } from './app.controller';
import { ArticleModule } from './post/article.module';
import { ProfileModule } from './profile/profile.module';
import { TagModule } from './tag/tag.module';
import { UserModule } from './auth/user.module';
import { FreelancerModule } from './freelancer/freelancer.module';
import { CustomerModule } from './customer/customer.module';
import config from "../config/mikro-orm.config";

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
  ],
  providers: [],
})
export class AppModule { }
