//src/app/page.tsx
"use client";
import { useUserByUserName } from "../hooks/users/useUsersHook";

export default function Home() {
  const { data, isError, isLoading } = useUserByUserName("johndoe");
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen w-full text-center">
        Loading...
      </div>
    );
  if (isError)
    return (
      <div className="flex items-center justify-center h-screen w-full text-center">
        Error fetching users
      </div>
    );
  // if (!data)
  //   return (
  //     <div className="flex items-center justify-center h-screen w-full text-center">
  //       No users found
  //     </div>
  //   );

  return (
    <div className="bg-gradient-custom flex flex-col min-h-screen">
      <main className="flex flex-1 items-center justify-center p-8 sm:p-20 text-center">
        <p className="text-lg">
          This is a basic skeleton for your ECLF application. Start building
          your features from here!
        </p>
      </main>

      {/* Footer at bottom */}
      <footer className="border-t text-sm text-gray-500 text-center py-4">
        © {new Date().getFullYear()} ECLF Skeleton
      </footer>
    </div>
  );
}
