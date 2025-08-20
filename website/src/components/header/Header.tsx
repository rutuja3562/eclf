// // components/Header.tsx
// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import Image from "next/image";
// import Button from "../button/Button";

// export default function Header({ menus }: { menus: any }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   return (
//     <header className="bg-[var(--header-bg)] flex items-center justify-between px-4 lg:px-8 border-b border-gray-400">
//       {/* Logo */}
//       <div className="flex items-center">
//         <Link href="/">
//           <img
//             src="/header/header-logo.png"
//             alt="Edelweiss Logo"
//             className="h-10 w-auto"
//           />
//         </Link>
//       </div>

//       {/* Desktop Nav */}
//       <nav className="hidden lg:flex gap-4">
//         {menus.map((menu: any) => (
//           <Link key={`${menu.id}-${menu.path}`} href={`/${menu.path}`}>
//             {menu.name}
//           </Link>
//         ))}
//       </nav>

//       {/* Desktop buttons */}
//       <div className="hidden lg:flex items-center gap-4">
//         <Link href="/pay-emi">Pay EMI</Link>
//         <Link href="/login">Login</Link>
//         <Link href="/apply-loan">
//           <Button label="Apply for loan" />
//         </Link>
//       </div>

//       {/* Mobile Menu Button */}
//       <button
//         className="lg:hidden text-2xl"
//         onClick={() => setIsMenuOpen(true)}
//         aria-label="Open menu"
//       >
//         <Image
//           src="/header/header-menu-icon.png"
//           alt="Menu"
//           width={24}
//           height={24}
//         />
//       </button>

//       {/* Mobile/Tablet Menu */}
//       {isMenuOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
//           <div className="bg-white w-1/2 h-full shadow-lg p-6 relative">
//             {/* Close Button */}
//             <button
//               className="absolute top-4 right-4 text-2xl"
//               onClick={() => setIsMenuOpen(false)}
//               aria-label="Close menu"
//             >
//               <Image
//                 src="/header/header-menu-close-icon.png"
//                 alt="Close menu"
//                 width={24}
//                 height={24}
//               />
//             </button>

//             {/* Mobile Links */}
//             <nav className="flex flex-col gap-4 mt-8">
//               {menus.map((menu: any) => (
//                 <Link
//                   key={`${menu.id}-${menu.path}`}
//                   href={`/${menu.path}`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {menu.name}
//                 </Link>
//               ))}
//               <Link href="/pay-emi" onClick={() => setIsMenuOpen(false)}>
//                 Pay EMI
//               </Link>
//               <Link href="/login" onClick={() => setIsMenuOpen(false)}>
//                 Login
//               </Link>
//               <Link href="/apply-loan" onClick={() => setIsMenuOpen(false)}>
//                 Apply for loan
//               </Link>
//             </nav>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
// components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Button from "../button/Button";
import { Menu } from "../../types/menusTypes";

export default function Header({ menus = [] }: { menus: Menu[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Separate top-level and child menus
  const topMenus = menus.filter((menu) => !menu.parentId);
  const childMenus = menus.filter((menu) => menu.parentId);
  console.log("childMenus", childMenus);

  return (
    <header className="bg-[var(--header-bg)] flex items-center justify-between px-4 lg:px-8 border-b border-gray-400">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <img
            src="/header/header-logo.png"
            alt="Edelweiss Logo"
            className="h-10 w-auto"
          />
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex gap-6 relative">
        {topMenus.map((menu) => {
          const children = childMenus.filter(
            (child) => child.parentId === menu.id
          );

          return (
            <div key={menu.id} className="relative group">
              <Link
                href={menu.path ?? `${menu.path}`}
                className="hover:text-blue-600 transition-colors"
              >
                {menu.name}
              </Link>

              {/* Dropdown if children exist */}
              {children.length > 0 && (
                <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48 z-50">
                  {children.map((child) => (
                    <Link
                      key={child.id}
                      href={child.path ?? `${child.path}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Desktop buttons */}
      <div className="hidden lg:flex items-center gap-4">
        <Link href="/pay-emi">Pay EMI</Link>
        <Link href="/login">Login</Link>
        <Link href="/apply-loan">
          <Button label="Apply for loan" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-2xl"
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open menu"
      >
        <Image
          src="/header/header-menu-icon.png"
          alt="Menu"
          width={24}
          height={24}
        />
      </button>

      {/* Mobile/Tablet Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-3/4 h-full shadow-lg p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <Image
                src="/header/header-menu-close-icon.png"
                alt="Close menu"
                width={24}
                height={24}
              />
            </button>

            {/* Mobile Links */}
            <nav className="flex flex-col gap-4 mt-8">
              {topMenus.map((menu) => {
                const children = childMenus.filter(
                  (child) => child.parentId === menu.id
                );

                return (
                  <div key={menu.id}>
                    <Link
                      href={menu.path ?? `${menu.path}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="font-semibold"
                    >
                      {menu.name}
                    </Link>
                    {children.length > 0 && (
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        {children.map((child) => (
                          <Link
                            key={child.id}
                            href={child.path ?? `${child.path}`}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-gray-600"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <Link href="/pay-emi" onClick={() => setIsMenuOpen(false)}>
                Pay EMI
              </Link>
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
              <Link href="/apply-loan" onClick={() => setIsMenuOpen(false)}>
                Apply for loan
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
