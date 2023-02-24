import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { v4 as uuid, validate } from 'uuid';
import { LinksService } from './links.service';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post()
  async create(@Body() createLinkDto: CreateLinkDto, @Res() res) {
    if (!createLinkDto.url)
      return res.status(400).send('You need to specify the URL!');

    createLinkDto.code = this.generateLinkCode(createLinkDto.longify || false);
    createLinkDto.id = uuid();
    createLinkDto.createTimeStamp = new Date();

    await this.linksService.create(createLinkDto);

    res.status(200).send(await this.linksService.findOne(createLinkDto.id));
  }

  // @Get()
  // index() {
  //   return 'Welcome to Short URL';
  // }

  @Get()
  async findAll() {
    return await this.linksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res) {
    if (!id) return 'You need to specify correct ID!';
    const link = await this.linksService.findOne(id);

    if (link && link !== null) {
      res.status(200).send(link);
    } else {
      res.status(404);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateLinkDto: UpdateLinkDto) {
    return validate(id)
      ? await this.linksService.update(id, updateLinkDto)
      : 'You need to specify correct ID!';
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return validate(id)
      ? await this.linksService.remove(id)
      : 'You need to specify correct ID!';
  }

  generateLinkCode(longify?: boolean) {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');

    if (longify) {
      const res = [];

      for (let i = 0; i <= 1499; i++) {
        const item = chars[Math.floor(Math.random() * chars.length)];
        res.push(Math.random() > 0.5 ? item.toLowerCase() : item.toUpperCase());
      }
      return res.join('');
    } else {
      const now = Math.round(Date.now() * Math.random());
      const res = String(now)
        .substring(String(now).length - 7)
        .split('')
        .map((v) =>
          Math.random() > 0.5
            ? chars[Number(v)]
            : chars[Number(v)].toUpperCase()
        );
      return res.join('');
    }
  }
}
