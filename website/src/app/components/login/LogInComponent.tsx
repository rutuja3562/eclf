import Image from "next/image";
import React from "react";
import { User } from "../../types/user/user";

export const LogInComponent = ({ user }: { user?: User }) => {
  if (!user) return null;
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 shadow-md w-full">
      <div className="flex items-center space-x-4">
        <Image src="/login-logo.png" alt="Login Logo" width={100} height={40} />
        <span className="text-xl font-semibold text-gray-800">
          Welcome {user.name}
        </span>
      </div>

      <div className="space-x-4">
        <button className="bg-green-600 text-white px-6 py-2 rounded-md shadow">
          Sign In
        </button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow">
          Register
        </button>
      </div>
    </div>
  );
};
