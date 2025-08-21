import { Module } from '@nestjs/common';
import { MenuDetailsController } from './menu-details.controller';
import { MenuDetailsService } from './menu-details.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuDetails } from './menu-details.entity';
import { Menu } from 'src/menu/entity/menu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MenuDetails, Menu])],
  controllers: [MenuDetailsController],
  providers: [MenuDetailsService],
})
export class MenuDetailsModule {}
