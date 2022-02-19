import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageController } from './language.controller';
import { Language } from './entities/language.entity';

@Module({
  imports:[MikroOrmModule.forFeature({entities:[Language]})],
  controllers: [LanguageController],
  providers: [LanguageService]
})
export class LanguageModule {}
