import { Collection, Entity, ManyToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { Talent } from "../../talent/entities/talent.entity";

@Entity()
export class Project {
    
    @PrimaryKey()
    id:number

    @Property()
    title:string

    description?:string
    @Property()

    @Property({name:"image_url"})
    imageUrl?:string

    @Property({name:"github_link"})
    githubLink?:string;

    @Property({name:"website_link"})
    websiteLink:string;

    @ManyToMany(() => Talent, (talent) => talent.projects)
    talents:Collection<Talent> =new Collection<Talent>(this)


}
