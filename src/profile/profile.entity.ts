import { Entity ,Property,PrimaryKey} from "@mikro-orm/core";

@Entity()
export class Contact{

    @PrimaryKey()
    id:number

    @Property()
    bio = '';

    @Property()
    twitterUrl?:string

    @Property()
    githubUrl?:string
}