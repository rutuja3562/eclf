import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post("signup")
  async signup(@Body() dto: AuthDto) {
    await this.authService.signup(dto);
  }

  @Post("signin")
  async signin() {
    await this.authService.signin();
  }

  @Post("logout")
  async logout() {
    await this.authService.logout();
  }

  @Post("refresh")
  async refresh() {
    await this.authService.refresh();
  }
}
