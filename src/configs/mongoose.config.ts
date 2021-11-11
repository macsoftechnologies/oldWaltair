import { Injectable } from '@nestjs/common';
import {
  MongooseOptionsFactory,
  MongooseModuleOptions,
} from '@nestjs/mongoose';
import { loadEnvironmentVariables } from './loader';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    loadEnvironmentVariables()
    
    return {
      uri:'mongodb+srv://macsof:macsof@nextlevelcarwash.yjs3i.mongodb.net/oldWaltair?retryWrites=true&w=majority',
      keepAlive: true,
      useNewUrlParser: true,
      autoIndex: true,
      connectTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      useUnifiedTopology: true,
    
    };
  }
}
