import { Get, Injectable, Param } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class MenusService {
  constructor(private prisma: PrismaService) {}
  @Get()
  async getMenus() {
    return this.prisma.menu.findMany();
  }
  // async getMenuBySlug(slug: string) {
  //   return this.prisma.menu.findUnique({
  //     where: { slug },
  //   });
  // }
  async getMenuBySlug(slug: string) {
    return this.prisma.menu.findUnique({
      where: { slug },
    });
  }
}
