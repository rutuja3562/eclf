import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMenuDetailsDto {
  @ApiProperty({
    example: 1,
    description: 'ID of the menu from the menu table',
  })
  @IsNotEmpty()
  @IsNumber()
  menuId: number; // passed only in DTO, not stored directly in entity

  @ApiProperty({
    example: 'TextBlock',
    description: 'Type of component to render',
  })
  @IsNotEmpty()
  @IsString()
  component: string;

  @ApiProperty({
    example: '{"title":"About Us","content":"Company info"}',
    description: 'JSON string or raw text content for the component',
  })
  @IsNotEmpty()
  @IsString()
  data: Record<string, any>;
}
