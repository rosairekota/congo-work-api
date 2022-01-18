import { ManyToMany, Collection } from '@mikro-orm/core';
import { UserRoleEnum } from './../../shared/enums/user-role.enum';
import { Entity, Enum, PrimaryKey } from '@mikro-orm/core';
import TimesTempEntity from '../../shared/timestemp.entity';

@Entity()
export class Role extends TimesTempEntity {
  @PrimaryKey()
  id: number;

  @Enum({ default: UserRoleEnum.ROLE_CLIENT })
  name: UserRoleEnum;
  
}
