import { ArrayType, Collection, Entity, ManyToOne, OneToMany, PrimaryKey, Property, wrap } from '@mikro-orm/core';
import slug from 'slug';

import { User } from '../../auth/entities/user.entity';
import TimesTempEntity from '../../shared/timestemp.entity';
import { Comment } from './comment.entity';

@Entity()
export class Article extends TimesTempEntity{

  @PrimaryKey()
  id: number;

  @Property()
  slug: string;

  @Property()
  title: string;

  @Property()
  description = '';

  @Property()
  body = '';

  @Property({ type: ArrayType })
  tagList: string[] = [];

  @ManyToOne(() => User)
  author?: User;

  @OneToMany(() => Comment, comment => comment.article, { eager: true, orphanRemoval: true })
  comments = new Collection<Comment>(this);

  @Property()
  favoritesCount = 0;

  constructor(author: User, title: string, description: string, body: string) {
    super()
    this.author = author;
    this.title = title;
    this.description = description;
    this.body = body;
    this.slug = slug(title, { lower: true }) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);
  }

  toJSON(user?: User): Article {
    const o = wrap(this).toObject();
    o.favorited = user && user.favorites.isInitialized() ? user.favorites.contains(this) : false;
    o.author = this.author.toJSON(user);

    return o as Article;
  }

}
