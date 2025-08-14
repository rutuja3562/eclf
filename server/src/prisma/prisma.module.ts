import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Global()
@Module({
  exports: [PrismaService], // Export PrismaService so it can be used in other modules
  providers: [PrismaService],
})
export class PrismaModule {}
