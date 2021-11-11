import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { client, clientSchema } from './schema/clientManagementSchema.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name :client.name , schema : clientSchema}]),
],
  controllers: [ClientController],
  providers: [ClientService]
})
export class ClientModule {}
