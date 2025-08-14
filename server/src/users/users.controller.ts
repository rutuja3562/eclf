import { Controller, Get, Query } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findUser(@Query() query: { userName: string }) {
    if (!query) {
      throw new Error("userName query parameter is required");
    }
    return this.usersService.findUser(query.userName);
  }
}
