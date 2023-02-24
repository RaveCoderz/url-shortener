import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Link, LinkDocument } from '../../../schemas/link.schema';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';

@Injectable()
export class LinksService {
  constructor(@InjectModel(Link.name) private linkModel: Model<LinkDocument>) {}

  async create(createLinkDto: CreateLinkDto): Promise<Link> {
    const createdLink = new this.linkModel(createLinkDto);
    return await createdLink.save();
  }

  async findAll(): Promise<Link[]> {
    return this.linkModel.find().exec();
  }

  async findOne(id: string): Promise<Link> {
    return this.linkModel.findOne({ id }).exec();
  }

  async findOneByCode(linkCode: string): Promise<Link> {
    return this.linkModel.findOne({ code: linkCode }).exec();
  }

  async update(id: string, updateLinkDto: UpdateLinkDto) {
    return this.linkModel.findOneAndUpdate({ id, ...updateLinkDto }).exec();
  }

  async remove(id: string) {
    return this.linkModel.findOneAndRemove({ id }).exec();
  }
}
