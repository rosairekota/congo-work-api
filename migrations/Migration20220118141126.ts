import { Migration } from '@mikro-orm/migrations';

export class Migration20220118141126 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `user` add `gender` enum(\'M\', \'F\', \'un_specified\') not null default \'un_specified\';');
  }

}
