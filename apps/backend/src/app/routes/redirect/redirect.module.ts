import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Link, LinkSchema } from '../../schemas/link.schema';
import { LinksService } from '../api/links/links.service';
import { RedirectController } from './redirect.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Link.name, schema: LinkSchema }]),
  ],
  controllers: [RedirectController],
  providers: [LinksService],
})
export class RedirectModule {}
