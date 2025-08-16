export interface User {
  id: string;
  userName: string;
  hash: string;
  active?: boolean;
}
export interface UpdateUserDto {
  userName?: string;
  active?: boolean;
}
export interface CreateUserDto {
  userName: string;
  hash: string;
  active?: boolean;
}
