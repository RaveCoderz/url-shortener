import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './user.schema';

export type LinkDocument = HydratedDocument<Link>;

@Schema()
export class Link {
  @Prop({
    required: true,
    unique: true,
  })
  id: string;

  @Prop()
  title: string;

  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } })
  user: User;

  @Prop({ required: true })
  url: string;

  @Prop({ required: true, unique: true })
  code: string;

  @Prop({
    required: true,
  })
  createTimeStamp: Date;
}

export const LinkSchema = SchemaFactory.createForClass(Link);
