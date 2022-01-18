import { UserRoleEnum } from './../../shared/enums/user-role.enum';
import { Repository } from '@mikro-orm/core';
import { EntityRepository, QueryBuilder } from '@mikro-orm/mariadb';
import { Role } from '../entities/user-role.entity';

@Repository(Role)
export class RoleRepository extends EntityRepository<Role> {

  async findByName(value:string):Promise<Role>{
    
      const query= await this.createQueryRole()
      switch (value) {
        case UserRoleEnum.ROLE_SUPER_ADMIN:
           query.andWhere({'r.name':UserRoleEnum.ROLE_SUPER_ADMIN})
          break;
        case UserRoleEnum.ROLE_ADMIN:
            query.andWhere({'r.name':UserRoleEnum.ROLE_ADMIN})
           break;
        case UserRoleEnum.ROLE_ADMIN:
            query.andWhere({'r.name':UserRoleEnum.ROLE_CLIENT})
        break;

        case UserRoleEnum.ROLE_ADMIN:
          query.andWhere({'r.name':UserRoleEnum.ROLE_TALENT})
         break;
        
        default:
          break;
      }
     return query.getSingleResult()
  }
   createQueryRole(): QueryBuilder<Role>{
      return this.createQueryBuilder('r')
      
  }
}
