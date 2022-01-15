import { UserStatusEnum } from './../shared/enums/user-status-enum';
import { UserRoleEnum } from './../shared/enums/user-role.enum';
import { IsEmail } from 'class-validator';
import crypto from 'crypto';
import {
  Collection,
  Entity,
  EntityRepositoryType,
  Enum,
  ManyToMany,
  OneToMany,
  PrimaryKey,
  Property,
  Unique,
  wrap,
} from '@mikro-orm/core';
import { Article } from '../post/article.entity';
import { UserRepository } from './user.repository';
@Unique({properties:["email"]})
@Entity()
export class User {

  [EntityRepositoryType]?: UserRepository;

  @PrimaryKey()
  id: number;

  @Property()
  firstName:string;
  
  @Property()
  lastName:string;

  @Property()
  username: string;

  @Property({ hidden: true })
  @IsEmail()
  email: string;

  @Property({ hidden: true })
  password: string;

  @Property()
  saltSecret: string;

  @Property()
  bio = '';

  @Property()
  image = '';

 

  @Enum()
  roles=new Collection<UserRoleEnum>(this)

  @Enum()
  status!: UserStatusEnum;

  @ManyToMany({ hidden: false })
  favorites = new Collection<Article>(this);

  @ManyToMany({ entity: () => User, inversedBy: u => u.followed, owner: true, pivotTable: 'user_to_follower', joinColumn: 'follower', inverseJoinColumn: 'following', hidden: true })
  followers = new Collection<User>(this);

  @ManyToMany(() => User, u => u.followers, { hidden: true })
  followed = new Collection<User>(this);

  @OneToMany(() => Article, article => article.author, { hidden: true })
  articles = new Collection<Article>(this);

  constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = crypto.createHmac('sha256', password).digest('hex');
  }

  toJSON(user?: User) {
    const o = wrap(this).toObject();
    o.image = this.image || 'https://static.productionready.io/images/smiley-cyrus.jpg';
    o.following = user && user.followers.isInitialized() ? user.followers.contains(this) : false; // TODO or followed?

    return o;
  }

}
