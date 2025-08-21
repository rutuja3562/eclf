import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuDetails } from './menu-details.entity';
import { Repository } from 'typeorm';
import { CreateMenuDetailsDto } from './dto/menu-details-dto';

@Injectable()
export class MenuDetailsService {
  constructor(
    @InjectRepository(MenuDetails)
    private menuDetailsRepositoty: Repository<MenuDetails>,
  ) {}

  async create(body: CreateMenuDetailsDto) {
    const menuDetails = this.menuDetailsRepositoty.create({
      ...body,
      menu: { id: body.menuId },
    });
    return await this.menuDetailsRepositoty.save(menuDetails);
  }
}
