import { Migration } from '@mikro-orm/migrations';

export class Migration20220115203935 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `user` change `image` `profile_photo` varchar(255) null;');


    this.addSql('alter table `user` drop `roles`;');

    this.addSql('alter table `talent` drop `profile_photo`;');

    this.addSql('create table `role` (`id` int unsigned not null auto_increment primary key, `created_at` datetime not null, `updated_at` datetime not null, `name` enum(\'talent\', \'admin\', \'client\', \'super\') not null default \'client\') default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `user_roles` (`user_id` int(11) unsigned not null, `role_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `user_roles` add index `user_roles_user_id_index`(`user_id`);');
    this.addSql('alter table `user_roles` add index `user_roles_role_id_index`(`role_id`);');
    this.addSql('alter table `user_roles` add primary key `user_roles_pkey`(`user_id`, `role_id`);');

    this.addSql('alter table `user_roles` add constraint `user_roles_user_id_foreign` foreign key (`user_id`) references `user` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `user_roles` add constraint `user_roles_role_id_foreign` foreign key (`role_id`) references `role` (`id`) on update cascade on delete cascade;');
  }

}
