import { User } from 'src/routes/users/entities/user.entity';

export class CreateLinkDto {
  id: string;
  title?: string;
  user?: User;
  url: string;
  code: string;
  createTimeStamp: Date;
}
