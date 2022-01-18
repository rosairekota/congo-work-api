import { Migration } from '@mikro-orm/migrations';

export class Migration20220118173509 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `talent` modify `experience` varchar(255) null, modify `level` varchar(255) null, modify `phone` varchar(255) null;');

    this.addSql('alter table `role` modify `name` enum(\'ROLE_SUPER_ADMIN\', \'ROLE_ADMIN\', \'ROLE_CLIENT\', \'ROLE_TALENT\') not null;');
  }

}
