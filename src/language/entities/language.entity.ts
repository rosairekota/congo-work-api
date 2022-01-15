import { Talent } from './../../talent/entities/talent.entity';
import { Collection, ManyToMany, PrimaryKey, Property } from "@mikro-orm/core";

export class Language {
    @PrimaryKey()
    id:string

    @Property()
    title:string

    @ManyToMany(()=>Talent)
    talents:Collection<Talent> = new Collection<Talent>(this)
}
