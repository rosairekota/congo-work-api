import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthMiddleware } from '../auth/auth.middleware';
import { User } from '../auth/user.entity';
import { UserModule } from '../auth/user.module';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { MikroOrmModule } from '@mikro-orm/nestjs'

@Module({
  controllers: [
    ProfileController,
  ],
  exports: [],
  imports: [MikroOrmModule.forFeature({ entities: [User] }), UserModule],
  providers: [ProfileService],
})
export class ProfileModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: 'profiles/:username/follow', method: RequestMethod.ALL });
  }
}
