import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

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


}
