import { Controller, Get, Param, Query } from "@nestjs/common";
import { MenusService } from "./menus.service";

@Controller("menus")
export class MenusController {
  constructor(private menuService: MenusService) {}
  @Get()
  async getMenus() {
    return this.menuService.getMenus();
  }
  // @Get(":slug")
  // async getMenu(@Param("slug") slug: string) {
  //   return this.menuService.getMenuBySlug(slug);
  // }
  @Get(":slug")
  async getMenuBySlug(@Param("slug") slug: string) {
    return this.menuService.getMenuBySlug(slug);
  }
}
