import { Migration } from '@mikro-orm/migrations';

export class Migration20220118141806 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `role` modify `name` enum(\'ROLE_SUPER_ADMIN\', \'ROLE_ADMIN\', \'ROLE_CLIENT\', \'ROLE_TALENT\') not null;');
  }

}
