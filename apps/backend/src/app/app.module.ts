import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoConfig } from '../config/mongo.config';
import { LinksModule } from './routes/api/links/links.module';
import { UsersModule } from './routes/api/users/users.module';
import { RedirectModule } from './routes/redirect/redirect.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'envs/.backend.env',
    }),
    MongooseModule.forRootAsync(getMongoConfig()),
    UsersModule,
    LinksModule,
    RedirectModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
