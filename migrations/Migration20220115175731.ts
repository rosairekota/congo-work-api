import { Migration } from '@mikro-orm/migrations';

export class Migration20220115175731 extends Migration {

  async up(): Promise<void> {
    this.addSql('drop table if exists `language_talents`;');
  }

}
