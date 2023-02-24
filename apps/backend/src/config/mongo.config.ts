import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';

export const getMongoConfig = (): MongooseModuleAsyncOptions => {
  return {
    useFactory: (configService: ConfigService) => ({
      uri: getMongoString(configService),
      autoIndex: true,
    }),
    inject: [ConfigService],
    imports: [ConfigModule],
  };
};

const getMongoString = (configService: ConfigService) =>
  'mongodb://' +
  configService.get<string>('MONGO_LOGIN') +
  ':' +
  configService.get<string>('MONGO_PASSWORD') +
  '@' +
  configService.get<string>('MONGO_HOST') +
  ':' +
  configService.get<string>('MONGO_PORT') +
  '/' +
  configService.get<string>('MONGO_DATABASE') +
  '?authSource=' +
  configService.get<string>('MONGO_AUTHDATABASE');
