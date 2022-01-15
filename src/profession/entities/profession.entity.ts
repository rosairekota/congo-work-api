import { Collection, Entity, PrimaryKey, Property, OneToMany } from '@mikro-orm/core';
import { Skill } from '../../skill/entities/skill.entity';

@Entity()
export class Profession {

  @PrimaryKey()
  id:number;

  @Property()
  title: string;

  @Property()
  description: string;
  
  @OneToMany(()=>Skill,(skill) => skill.profession)
  skills = new Collection<Skill>(this);

  @Property()
  experience: string;

  @Property()
  level:string;
}
