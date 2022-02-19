import { ConfigModule } from '@nestjs/config';

import { SECRET } from './../../config/index';
import { JwtModule } from '@nestjs/jwt';
import { Role as UserRole} from './entities/user-role.entity';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthMiddleware } from '../middleware/auth.middleware';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { MikroOrmModule } from '@mikro-orm/nestjs'
import {PassportModule} from "@nestjs/passport"
import {JwtStrategy} from "./strategy/jwt.strategy"
import { Profession } from '../profession/entities/profession.entity';
import { Talent } from '../talent/entities/talent.entity';
import { Client } from '../client/entities/client.entity';

@Module({
  controllers: [
    UserController,
  ],
  exports: [UserService,PassportModule,JwtModule],
  imports: [MikroOrmModule.forFeature({ entities: [User,UserRole,Profession,Talent,Client] }), 
  // JWT configurations
  PassportModule.register({
    defaultStrategy: 'jwt',
  }),
  JwtModule.register({
    secret: SECRET,
  }),
  ConfigModule.forRoot({
    isGlobal: true,
  }),
],
  providers: [UserService,JwtStrategy],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: 'user/:email', method: RequestMethod.GET }, { path: 'user', method: RequestMethod.PUT });
  }
}
