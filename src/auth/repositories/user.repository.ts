import { Role } from './../entities/user-role.entity';
import { Repository } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/mariadb';
import { User } from '../entities/user.entity';

@Repository(User)
export class UserRepository extends EntityRepository<User> {

    async findByEmailOrUsername(value:string):Promise<User>{
        return await this.createQueryBuilder('user')
        .join('user.roles','r')
        .where('r.id=:id',[{id:'r.id'}])
        .where({'user.email':value})
        .orWhere({'user.username':value})
        .getSingleResult()
    }
}
