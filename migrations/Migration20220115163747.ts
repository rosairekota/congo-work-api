import { Migration } from '@mikro-orm/migrations';

export class Migration20220115163747 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `talent` (`id` int unsigned not null auto_increment primary key) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `project` (`id` int unsigned not null auto_increment primary key, `title` varchar(255) not null, `image_url` varchar(255) null, `github_link` varchar(255) null, `website_link` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `profession` (`id` int unsigned not null auto_increment primary key, `title` varchar(255) not null, `description` varchar(255) not null, `experience` varchar(255) not null, `level` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `skill` (`id` int unsigned not null auto_increment primary key, `title` varchar(255) not null, `icon` varchar(255) not null, `profession_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `skill` add index `skill_profession_id_index`(`profession_id`);');

    this.addSql('create table `client` (`id` int unsigned not null auto_increment primary key) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `tag` (`id` int unsigned not null auto_increment primary key, `tag` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `contact` (`id` int unsigned not null auto_increment primary key, `bio` varchar(255) not null, `twitter_url` varchar(255) null, `github_url` varchar(255) null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `user` (`id` int unsigned not null auto_increment primary key, `first_name` varchar(255) not null, `last_name` varchar(255) not null, `username` varchar(255) not null, `email` varchar(255) not null, `password` varchar(255) not null, `salt_secret` varchar(255) not null, `bio` varchar(255) not null, `image` varchar(255) not null, `roles` tinyint not null, `status` tinyint not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `article` (`id` int unsigned not null auto_increment primary key, `created_at` datetime not null, `updated_at` datetime not null, `slug` varchar(255) not null, `title` varchar(255) not null, `description` varchar(255) not null, `body` varchar(255) not null, `tag_list` text not null, `author_id` int(11) unsigned null, `favorites_count` int(11) not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `article` add index `article_author_id_index`(`author_id`);');

    this.addSql('create table `comment` (`id` int unsigned not null auto_increment primary key, `created_at` datetime not null, `updated_at` datetime not null, `body` varchar(255) not null, `article_id` int(11) unsigned null, `author_id` int(11) unsigned null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `comment` add index `comment_article_id_index`(`article_id`);');
    this.addSql('alter table `comment` add index `comment_author_id_index`(`author_id`);');

    this.addSql('create table `user_favorites` (`user_id` int(11) unsigned not null, `article_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `user_favorites` add index `user_favorites_user_id_index`(`user_id`);');
    this.addSql('alter table `user_favorites` add index `user_favorites_article_id_index`(`article_id`);');
    this.addSql('alter table `user_favorites` add primary key `user_favorites_pkey`(`user_id`, `article_id`);');

    this.addSql('create table `user_to_follower` (`follower` int(11) unsigned not null, `following` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `user_to_follower` add index `user_to_follower_follower_index`(`follower`);');
    this.addSql('alter table `user_to_follower` add index `user_to_follower_following_index`(`following`);');
    this.addSql('alter table `user_to_follower` add primary key `user_to_follower_pkey`(`follower`, `following`);');

    this.addSql('alter table `skill` add constraint `skill_profession_id_foreign` foreign key (`profession_id`) references `profession` (`id`) on update cascade;');

    this.addSql('alter table `article` add constraint `article_author_id_foreign` foreign key (`author_id`) references `user` (`id`) on update cascade on delete set null;');

    this.addSql('alter table `comment` add constraint `comment_article_id_foreign` foreign key (`article_id`) references `article` (`id`) on update cascade on delete set null;');
    this.addSql('alter table `comment` add constraint `comment_author_id_foreign` foreign key (`author_id`) references `user` (`id`) on update cascade on delete set null;');

    this.addSql('alter table `user_favorites` add constraint `user_favorites_user_id_foreign` foreign key (`user_id`) references `user` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `user_favorites` add constraint `user_favorites_article_id_foreign` foreign key (`article_id`) references `article` (`id`) on update cascade on delete cascade;');

    this.addSql('alter table `user_to_follower` add constraint `user_to_follower_follower_foreign` foreign key (`follower`) references `user` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `user_to_follower` add constraint `user_to_follower_following_foreign` foreign key (`following`) references `user` (`id`) on update cascade on delete cascade;');

    this.addSql('alter table `user` add unique `user_email_unique`(`email`);');
  }

}
