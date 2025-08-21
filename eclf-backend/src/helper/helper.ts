import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-User-Dto';

export const hashPass = async (userData: CreateUserDto) => {
  const salt = await bcrypt.genSalt();
  userData.password = await bcrypt.hash(userData.password, salt);
  return userData;
};
