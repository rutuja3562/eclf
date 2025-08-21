import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Akshay', description: 'name of the new user' })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Akshay@gmail.com',
    description: 'email of the user',
  })
  @IsString()
  email: string;

  @ApiProperty({ example: 'yourpass', description: 'password of the user' })
  @IsString()
  password: string;

  @ApiProperty({ example: 'user', description: 'role of the new user' })
  @IsString()
  role: string;
}
