import { Migration } from '@mikro-orm/migrations';

export class Migration20220117015201 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `talent` add `availability` tinyint not null default 1;');
  }

}
