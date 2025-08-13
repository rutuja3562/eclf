import { LogInComponent } from "../../components/login/LogInComponent";
import { useUsers } from "../../hooks/users/useUsersHook";

import React from "react";

export const Login = () => {
  const { data, isLoading, isError } = useUsers();
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 shadow-md w-full">
      <LogInComponent user={data && data[0]} />
    </div>
  );
};
