import { Migration } from '@mikro-orm/migrations';

export class Migration20220115184815 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `user` modify `roles` text not null default \'client\', modify `status` tinyint null default 0;');
  }

}
