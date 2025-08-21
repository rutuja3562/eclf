import { Body, Controller, Get, Post } from '@nestjs/common';
import { MenuDetailsService } from './menu-details.service';
import { CreateMenuDetailsDto } from './dto/menu-details-dto';

@Controller('menu-details')
export class MenuDetailsController {
  constructor(private menuDetailsService: MenuDetailsService) {}

  @Post()
  async CreateMenuDetailsDto(@Body() menuDetails: CreateMenuDetailsDto) {
    const details = await this.menuDetailsService.create(menuDetails);
    return {
      success: true,
      message: 'menudetails Created Successfully',
      data: details,
    };
  }
}
