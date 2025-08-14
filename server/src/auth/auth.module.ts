// // import { Module } from '@nestjs/common';
// // import { AuthController } from './auth.controller';
// // import { AuthService } from './auth.service';

// // @Module({
// //   controllers: [AuthController],
// //   providers: [AuthService]
// // })
// // export class AuthModule {}

// // auth.module.ts
// import { Module } from "@nestjs/common";
// import { AuthController } from "./auth.controller";
// import { AuthService } from "./auth.service";
// import { PrismaModule } from "src/prisma/prisma.module";

// @Module({
//   imports: [PrismaModule],
//   controllers: [AuthController],
//   providers: [AuthService],
// })
// export class AuthModule {}
import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
