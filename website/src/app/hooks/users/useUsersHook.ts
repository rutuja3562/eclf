//hooks/users/useUsersHook.ts
import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import {
  createUser,
  updateUser,
  deleteUser,
  fetchUsers,
  fetchUserById,
  fetchUserByUserName,
} from "../../api/user/userApi";
import { CreateUserDto, UpdateUserDto, User } from "../../types/user/user";

// READ
export const useUsers = (): UseQueryResult<User[], Error> => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 60 * 1000, // how long data stays fresh
    gcTime: 5 * 60 * 1000, // how long to keep in cache (was cacheTime)
    retry: 1,
    refetchOnWindowFocus: false,
  });
};

// READ Single User
export const useUserById = (id: string) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUserById(id),
    enabled: !!id, // Only runs if `id` is truthy
    staleTime: 60 * 1000,
  });
};
// READ Single User by UserName
export const useUserByUserName = (userName: string) => {
  return useQuery({
    queryKey: ["user", userName],
    queryFn: () => fetchUserByUserName(userName),
    enabled: !!userName, // Only runs if `id` is truthy
    staleTime: 60 * 1000,
  });
};

// CREATE
export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newUser: CreateUserDto) => createUser(newUser),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

// UPDATE
export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      updateData,
    }: {
      id: string;
      updateData: UpdateUserDto;
    }) => updateUser({ id, updateData }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

// DELETE
export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
