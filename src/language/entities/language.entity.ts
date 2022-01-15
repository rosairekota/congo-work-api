import { Talent } from './../../talent/entities/talent.entity';
import { Collection, Entity, ManyToMany, PrimaryKey, Property } from "@mikro-orm/core";
@Entity()
export class Language {
    @PrimaryKey()
    id:string

    @Property()
    title:string

    @ManyToMany(()=>Talent,(talent)=>talent.languages)
    talents = new Collection<Talent>(this)
}
