import { Migration } from '@mikro-orm/migrations';

export class Migration20220117134426 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `profession` drop `experience`;');
    this.addSql('alter table `profession` drop `level`;');

    this.addSql('alter table `talent` add `experience` varchar(255) not null, add `level` varchar(255) not null;');
  }

}
