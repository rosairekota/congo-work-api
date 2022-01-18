import { Profession } from './entities/profession.entity';
import { Repository } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/mariadb';

@Repository(Profession)
export class ProfessionRepository extends EntityRepository<Profession>{
}