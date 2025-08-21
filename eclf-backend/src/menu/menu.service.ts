import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Menu } from './entity/menu.entity';
import { Repository, IsNull } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMenuDto } from './dto/create-menu-dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu) private menuRepository: Repository<Menu>,
  ) {}

  async findAll(): Promise<Menu[]> {
    return this.menuRepository.find({
      where: { parent: IsNull() }, // Get only root items
      relations: {
        children: {
          children: true, // This enables 2 levels of nesting
        },
      },
      order: {
        order: 'ASC',
        children: {
          order: 'ASC', // Sort submenus too
        },
      },
    });
  }

  async create(createMenuDto: CreateMenuDto) {
    const menu = this.menuRepository.create(createMenuDto);

    if (createMenuDto.parentId) {
      menu.parent = await this.menuRepository.findOneBy({
        id: createMenuDto.parentId,
      });

      if (!menu.parent) {
        throw new NotFoundException(
          `Parent menu with ID ${createMenuDto.parentId} not found`,
        );
      }
      // Prevent circular references
      if (createMenuDto.parentId === menu.id) {
        throw new BadRequestException('Menu cannot be its own parent');
      }
    }

    return this.menuRepository.save(menu);
  }

  async update(id: number, updateMenuData: CreateMenuDto) {
    if (!id) {
      throw new Error('Menu ID is required for update');
    }
    return await this.menuRepository.update(id, updateMenuData);
  }

  async deletItemMenu(id: number) {
    return await this.menuRepository.delete(id);
  }
}
