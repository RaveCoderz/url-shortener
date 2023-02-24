import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({
    required: true,
    unique: true,
  })
  id: string;

  @Prop({
    required: true,
  })
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({
    required: true,
  })
  createTimeStamp: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
