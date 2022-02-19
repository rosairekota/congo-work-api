import { Entity, PrimaryKey } from "@mikro-orm/core";

@Entity()
export class Client {
    @PrimaryKey()
    id:number
}
