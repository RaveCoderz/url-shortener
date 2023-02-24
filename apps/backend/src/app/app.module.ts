import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LinksModule } from './routes/links/links.module';
import { UsersModule } from './routes/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['envs/.env'],
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    UsersModule,
    LinksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
