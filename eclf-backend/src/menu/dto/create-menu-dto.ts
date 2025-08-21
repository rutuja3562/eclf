import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMenuDto {
  @ApiProperty({ example: 'Home', description: 'name of the new route' })
  @IsString()
  title: string;

  @ApiProperty({ example: '/home', description: 'path of the route' })
  @IsString()
  url: string;

  @ApiProperty({
    example: '',
    description: 'icon for the that route',
    required: false,
    nullable: true,
  })
  @IsString()
  @IsOptional()
  icon: string;

  @ApiProperty({ example: '1', description: 'order for sorting the routes' })
  @IsNumber()
  order: number;

  @ApiProperty({
    example: '1',
    description: 'parent id for whose child is this route',
    nullable: true,
    required: false,
  })
  @IsNumber()
  parentId: number;
}
