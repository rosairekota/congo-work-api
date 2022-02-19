import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { User } from '../../auth/entities/user.entity';
import { Article } from './article.entity';

@Entity()
export class Comment {

  @PrimaryKey()
  id: number;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  body: string;

  @ManyToOne(() => Article)
  article?: Article;

  @ManyToOne(() => User)
  author?: User;

  constructor(author: User, article: Article, body: string) {
    this.author = author;
    this.article = article;
    this.body = body;
  }

}
