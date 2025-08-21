import { Injectable } from '@nestjs/common';
import { Users } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-User-Dto';
import { hashPass } from 'src/helper/helper';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {}

  async create(userData: CreateUserDto) {
    this.userRepository.create(userData);
    const pass = await hashPass(userData);
    return await this.userRepository.save(pass);
  }

  async findAllUser() {
    return await this.userRepository.find();
  }

  async findOneUser(id: number) {
    if (!id) {
      throw new Error('user Id required');
    }
    return await this.userRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, userData: CreateUserDto) {
    if (!id) {
      throw new Error('user ID is required for update');
    }
    const data = await hashPass(userData);
    return await this.userRepository.update(id, data);
  }

  async deleteUser(id: number) {
    return await this.userRepository.delete(id);
  }
}
