import { SECRET } from './../config/index';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { ArticleModule } from './post/article.module';
import { ProfileModule } from './profile/profile.module';
import { TagModule } from './tag/tag.module';
import { UserModule } from './auth/user.module';
import { ProjectModule } from './project/project.module';
import { SkillModule } from './skill/skill.module';
import { JwtStrategy } from './auth/strategy/jwt.strategy';
import config from "./mikro-orm.config";
import { HelmetMiddleware } from '@nest-middlewares/helmet';
import { TalentModule } from './talent/talent.module';
import { ClientModule } from './client/client.module';
import { ProfessionModule } from './profession/profession.module';
import { LanguageModule } from './language/language.module';

@Module({
  controllers: [
    AppController,
  ],
  imports: [
    MikroOrmModule.forRoot(config),
    JwtModule.register({
      secret: SECRET,
      signOptions: { expiresIn: '60s' },
    }),
    ArticleModule,
    UserModule,
    ProfileModule,
    TagModule,
    ProjectModule,
    SkillModule,
    TalentModule,
    ClientModule,
    ProfessionModule,
    LanguageModule,
  ],
  providers: [JwtStrategy],
})
export class AppModule implements NestModule{ 
  configure(consummer:MiddlewareConsumer){
    // xss protected=helmet middleware
    consummer.apply(HelmetMiddleware).forRoutes('')
  }
}
