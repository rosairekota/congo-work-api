import { Repository } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/mariadb';
import { User } from './entities/user.entity';

@Repository(User)
export class UserRepository extends EntityRepository<User> {

}
