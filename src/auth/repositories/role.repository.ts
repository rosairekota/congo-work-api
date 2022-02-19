import { UserRoleEnum } from './../../shared/enums/user-role.enum';
import { Repository, } from '@mikro-orm/core';
import { EntityRepository, QueryBuilder } from '@mikro-orm/mariadb';
import { Role } from '../entities/user-role.entity';

@Repository(Role)
export class RoleRepository extends EntityRepository<Role> {

  async findByName(value:UserRoleEnum):Promise<Role>{

      const query= await this.createQueryRole()
      switch (value) {
        case UserRoleEnum.ROLE_SUPER_ADMIN:
           query.andWhere({'r.name':value})
          break;
        case UserRoleEnum.ROLE_ADMIN:
            query.andWhere({'r.name':value})
           break;
        case UserRoleEnum.ROLE_CLIENT:
            query.andWhere({'r.name':value})
        break;

        case UserRoleEnum.ROLE_TALENT:
          query.andWhere({'r.name':value})
         break;
        
        default:
          throw new Error("cette valeur n'existe pas");
          break;
      }
     return query.getSingleResult()
  }
   createQueryRole(): QueryBuilder<Role>{
      return this.createQueryBuilder('r')
      
  }
}
