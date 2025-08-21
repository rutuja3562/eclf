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
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-User-Dto';
import type { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('register')
  async createUser(@Body() body: CreateUserDto) {
    const createUserData = await this.userService.create(body);
    return {
      success: true,
      message: 'User Created Succeffully',
      data: createUserData,
    };
  }

  @Get()
  async findAll() {
    const getMenuData = await this.userService.findAllUser();
    return {
      success: true,
      message: 'Users fetched succesfully',
      data: getMenuData,
    };
  }

  @Get(':id')
  async findUser(@Param('id') id: string) {
    const user = await this.userService.findOneUser(+id);
    if (user) {
      return {
        success: true,
        message: 'user found',
        data: user,
      };
    } else {
      return {
        success: false,
        message: 'user not found',
      };
    }
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() body: CreateUserDto,
    @Res() res: Response,
  ) {
    const userData = await this.userService.update(+id, body);
    if (userData) {
      return res.status(200).json({
        success: true,
        message: 'updated data for user',
        data: userData,
      });
    } else {
      return {
        success: false,
        message: 'updated data for user',
      };
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const delateUserData = await this.userService.deleteUser(+id);
    return {
      success: true,
      message: 'user deleted',
      data: delateUserData,
    };
  }
}
