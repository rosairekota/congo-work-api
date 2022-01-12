import { User } from './../../auth/user.entity';
import { Entity,OneToOne,PrimaryKey,Property } from "@mikro-orm/core";

@Entity()
export class Customer {

    @PrimaryKey()
    id:number

    @OneToOne({owner:true})
    user:User

}
