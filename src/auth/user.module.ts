import { Role as UserRole} from './entities/user-role.entity';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthMiddleware } from '../middleware/auth.middleware';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { MikroOrmModule } from '@mikro-orm/nestjs'

@Module({
  controllers: [
    UserController,
  ],
  exports: [UserService],
  imports: [MikroOrmModule.forFeature({ entities: [User,UserRole] })],
  providers: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: 'user', method: RequestMethod.GET }, { path: 'user', method: RequestMethod.PUT });
  }
}
