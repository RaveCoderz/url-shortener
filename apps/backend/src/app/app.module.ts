import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoConfig } from '../config/mongo.config';
import { LinksModule } from './routes/links/links.module';
import { UsersModule } from './routes/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'envs/.backend.env',
    }),
    MongooseModule.forRootAsync(getMongoConfig()),
    UsersModule,
    LinksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
