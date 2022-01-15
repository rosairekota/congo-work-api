import { Collection, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryKey, Property, Unique } from "@mikro-orm/core";
import { User } from "../../auth/user.entity";
import { Language } from "../../language/entities/language.entity";
import { Profession } from "../../profession/entities/profession.entity";
import { Project } from "../../project/entities/project.entity";

@Entity()
@Unique({properties:['phone']})
export class Talent {

    @PrimaryKey()
    id:number

    @Property({name:"profile_photo"})
    profilePhoto?:string

    @Property()
    education:string

    @Property({name:"github_link"})
    githubLink?:string;

    @Property({name:"website_link"})
    websiteLink:string;
    
    @Property()
    location:string;
    
    @Property()
    phone:string

    @OneToOne(()=> User)
    user:User


    @ManyToOne()
    profession:Profession

    @ManyToMany({entity:()=>Language, owner: true, pivotTable:"language_talent"})
    languages:Collection<Language> = new Collection<Language>(this)

    @ManyToMany({entity:()=>Project, owner:true, pivotTable:"project_talent"})
    projects:Collection<Project> = new Collection<Project>(this)
}
