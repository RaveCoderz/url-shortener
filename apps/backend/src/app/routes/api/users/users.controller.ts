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
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto, @Res() res) {
    if (!createUserDto.name)
      return res.status(400).send('You need to specify the name!');

    createUserDto.id = uuid();
    createUserDto.createTimeStamp = new Date();

    return res.status(200).send(this.usersService.create(createUserDto));
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return validate(id)
      ? (await this.usersService.findOne(id))
      : 'You need to specify correct ID!';
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return validate(id)
      ? await this.usersService.update(id, updateUserDto)
      : 'You need to specify correct ID!';
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return validate(id)
      ? await this.usersService.remove(id)
      : 'You need to specify correct ID!';
  }
}
