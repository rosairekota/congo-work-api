import { Profession } from '../entities/profession.entity';
import { Repository } from '@mikro-orm/core';
import { EntityRepository, QueryBuilder } from '@mikro-orm/mariadb';


@Repository(Profession)
export class ProfessionRepository extends EntityRepository<Profession>{

    async finbByTitle(title:string):Promise<Profession>{
        return await this.createProfessionBuilder()
        .andWhere({title})
        .getSingleResult()
    }

    createProfessionBuilder():QueryBuilder<Profession>{
        return this.createQueryBuilder('p')
    }
}