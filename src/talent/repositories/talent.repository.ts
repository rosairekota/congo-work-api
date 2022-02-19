import { Talent } from './../entities/talent.entity';
import { Repository, } from '@mikro-orm/core';
import { EntityRepository, QueryBuilder } from '@mikro-orm/mariadb';

@Repository(Talent)
export class TalentRepository extends EntityRepository<Talent>{
    
}