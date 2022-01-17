import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthMiddleware } from '../middleware/auth.middleware';
import { User } from '../auth/entities/user.entity';
import { UserModule } from '../auth/user.module';
import { ArticleController } from './article.controller';
import { Article } from './entities/article.entity';
import { ArticleService } from './article.service';
import { Comment } from './entities/comment.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs'


@Module({
  controllers: [
    ArticleController,
  ],
  imports: [MikroOrmModule.forFeature({ entities: [Article, Comment, User] }), UserModule,UserModule],
  providers: [ArticleService],
})
export class ArticleModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'articles/feed', method: RequestMethod.GET },
        { path: 'articles', method: RequestMethod.POST },
        { path: 'articles/:slug', method: RequestMethod.DELETE },
        { path: 'articles/:slug', method: RequestMethod.PUT },
        { path: 'articles/:slug/comments', method: RequestMethod.POST },
        { path: 'articles/:slug/comments/:id', method: RequestMethod.DELETE },
        { path: 'articles/:slug/favorite', method: RequestMethod.POST },
        { path: 'articles/:slug/favorite', method: RequestMethod.DELETE });
  }
}
