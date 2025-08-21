import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu-dto';
import type { Response } from 'express';

@Controller('menu')
export class MenuController {
  constructor(private menuService: MenuService) {}
  @Post()
  async createMenu(@Body() createMenuDto: CreateMenuDto) {
    const createMenuItem = await this.menuService.create(createMenuDto);
    return {
      success: true,
      message: 'Create menuItem',
      data: createMenuItem,
    };
  }

  @Get()
  async findAllMenus() {
    const getMenuData = await this.menuService.findAll();
    return {
      success: true,
      message: 'Get All MenuItems Data',
      data: getMenuData,
    };
  }

  @Patch(':id')
  async updateMenu(
    @Param('id') id: string,
    @Body() updateMenuData: CreateMenuDto,
    @Res() res: Response,
  ) {
    try {
      const menuData = await this.menuService.update(+id, updateMenuData);
      if (menuData) {
        return res.status(200).json({
          success: true,
          message: 'updated data for user',
          data: menuData,
        });
      } else {
        return {
          success: false,
          message: 'updated data for user',
        };
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      const deleteMenu = await this.menuService.deletItemMenu(+id);
      return {
        success: true,
        message: 'MenuItem deleted',
        data: deleteMenu,
      };
    } catch (error) {
      return {
        success: false,
        message: error,
      };
    }
  }
}
