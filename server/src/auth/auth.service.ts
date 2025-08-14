import {
  ConflictException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signup(dto: AuthDto) {
    try {
      // Check if email already exists
      const existingUser = await this.prisma.user.findUnique({
        where: { userName: dto.userName },
      });

      if (existingUser) {
        throw new ConflictException({
          statusCode: HttpStatus.CONFLICT,
          message: "User name already registered",
        });
      }

      // Create user
      const newUser = await this.prisma.user.create({
        data: {
          userName: dto.userName,
          hash: dto.password, // You should hash this before saving
          active: true,
        },
      });

      return {
        statusCode: HttpStatus.CREATED,
        message: "User registered successfully",
        data: newUser,
      };
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error; // Already handled
      }
      throw new InternalServerErrorException({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: "Something went wrong while registering user",
        error: error.message,
      });
    }
  }

  signin() {
    // Logic for user signin
  }

  logout() {
    // Logic for user logout
  }

  refresh() {
    // Logic for refreshing authentication tokens
  }
}
