import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Project {
    
    @PrimaryKey()
    id:number

    @Property()
    title:string

    @Property()
    description?:string

    @Property({name:"image_url"})
    imageUrl?:string

    @Property({name:"github_link"})
    githubLink?:string;

    @Property({name:"website_link"})
    websiteLink:string;


}
