import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Client } from './entities/client.entity';
import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';

@Module({
  imports: [ MikroOrmModule.forFeature({ entities: [Client] })],
  controllers: [ClientController],
  providers: [ClientService]
})
export class ClientModule {}
