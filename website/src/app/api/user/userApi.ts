// /app/api/user/userApi.ts
import axios from "axios";
import { User, CreateUserDto, UpdateUserDto } from "../../types/user/user";
import { API_BASE_URL } from "../../config/config";

export const fetchUsers = async (): Promise<User[]> => {
  console.log("API_BASE_URL", API_BASE_URL);
  const data = await axios.get(`${API_BASE_URL}/users`);
  return data.data;
};

export const fetchUserById = async (userId: string): Promise<User> => {
  console.log("API_BASE_URL", API_BASE_URL);
  const res = await axios.get(`${API_BASE_URL}/users/${userId}`);
  console.log("res", res.data);
  return res.data;
};
export const fetchUserByUserName = async (userName: string): Promise<User> => {
  console.log("API_BASE_URL", `${API_BASE_URL}/users?userName=${userName}`);
  const res = await axios.get(`${API_BASE_URL}/users?userName=${userName}`);
  console.log("res", res.data);
  return res.data;
};

export const createUser = async (newUser: CreateUserDto): Promise<User> => {
  const { data } = await axios.post(`${API_BASE_URL}/users`, newUser);
  return data;
};

export const updateUser = async ({
  id,
  updateData,
}: {
  id: string;
  updateData: UpdateUserDto;
}): Promise<User> => {
  const { data } = await axios.patch(`${API_BASE_URL}/users/${id}`, updateData);
  return data;
};

export const deleteUser = async (id: string): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/users/${id}`);
};
