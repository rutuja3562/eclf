import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './entity/menu.entity';
import { MenuDetails } from 'src/menu-details/menu-details.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Menu, MenuDetails])],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
