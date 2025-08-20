//src/app/page.tsx
"use client";

export default function Home() {
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
