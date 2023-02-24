import { User } from '../../users/entities/user.entity';

export class CreateLinkDto {
  id: string;
  title?: string;
  user?: User;
  url: string;
  code: string;
  longify?: boolean;
  createTimeStamp: Date;
}
