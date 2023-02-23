import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    required: true,
  })
  id: string;

  @ApiProperty({
    required: true,
  })
  name: string;

  @ApiProperty({
    required: true,
  })
  login: string;

  email?: string;

  @ApiProperty({
    required: true,
  })
  password: string;

  @ApiProperty({
    required: true,
  })
  createTimeStamp: Date;
}
