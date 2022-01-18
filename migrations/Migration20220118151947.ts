import { Migration } from '@mikro-orm/migrations';

export class Migration20220118151947 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `role` modify `name` enum(\'ROLE_SUPER_ADMIN\', \'ROLE_ADMIN\', \'ROLE_CLIENT\', \'ROLE_TALENT\') default \'ROLE_CLIENT\';');
  }

}
