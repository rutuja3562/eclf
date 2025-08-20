import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}
  @Get()
  async findAllMenus() {
    return this.menuService.findAll();
  }

  @Get(':path')
  async getMenuBySlug(@Param('path') slug: string) {
    return this.menuService.getMenuBySlug(slug);
  }
  @Post()
  async createMenu(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.create(createMenuDto);
  }
}
