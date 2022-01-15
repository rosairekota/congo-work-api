import { Property } from "@mikro-orm/core";

export default abstract class TimesTempEntity {
 
  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();
 
}
