import { Talent } from './../../talent/entities/talent.entity';
import { Collection, Entity, PrimaryKey, Property, OneToMany } from '@mikro-orm/core';
import { Skill } from '../../skill/entities/skill.entity';

@Entity()
export class Profession {

  @PrimaryKey()
  id:number;

  @Property()
  title: string;

  @Property()
  description?: string;

  @OneToMany(()=>Skill,(skill) => skill.profession)
  skills = new Collection<Skill>(this);

  @OneToMany(()=>Talent,(talent) => talent.profession)
  talents = new Collection<Talent>(this)
}
