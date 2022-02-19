import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Profession } from "../../profession/entities/profession.entity";

@Entity()
export class Skill {
     
    @PrimaryKey()
    id:number

    @Property()
    title:string
    
    @Property()
    icon:string
    
    @ManyToOne(()=>Profession)
    profession:Profession
}
