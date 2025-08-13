// components/Header.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { User } from "../../types/user/user";
import Image from "next/image";
import Button from "../button/Button";
// import { FiMenu, FiX } from "react-icons/fi";
type Menu = { id: number; name: string; slug: string; title: string };

export default function Header({ user }: { user?: User }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menus, setMenus] = useState<Menu[]>([]);

  useEffect(() => {
    fetch("/api/menus")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);
  return (
    <header className="bg-[var(--header-bg)] flex items-center justify-between px-4  lg:px-8 border-b border-gray-400">
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

      {/* Desktop Nav (only for lg and above) */}
      <nav className="flex gap-4">
        {menus.map((menu) => (
          <Link key={menu.id} href={`/${menu.slug}`}>
            {menu.title}
          </Link>
        ))}
      </nav>
      <div className="hidden lg:flex items-center gap-4">
        <Link href="/pay-emi">Pay EMI</Link>
        <Link href="/login">Login</Link>
        <Link href="/apply-loan">
          <Button label="Apply for loan" />
        </Link>
      </div>

      {/* Menu Button for mobile + tablet */}
      <button
        className="lg:hidden text-2xl"
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open menu"
      >
        <Image
          src="/header/header-menu-icon.png"
          alt="Close menu"
          width={24}
          height={24}
        />
      </button>

      {/* Mobile/Tablet Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-1/2 h-full shadow-lg p-6 relative">
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

            {/* Links */}
            <nav className="flex gap-4">
              {menus.map((menu) => (
                <Link key={menu.id} href={`/${menu.slug}`}>
                  {menu.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";

// type Menu = { id: number; name: string; slug: string; title: string };

// export default function Header() {
// const [menus, setMenus] = useState<Menu[]>([]);

// useEffect(() => {
//   fetch("/api/menus")
//     .then((res) => res.json())
//     .then((data) => setMenus(data));
// }, []);
//   useEffect(() => {
//     console.log("menus", menus);
//   }, [menus]);
//   return (
//     <header className="">
//       <nav className="flex gap-4">
//         {menus.map((menu) => (
//           <Link key={menu.id} href={`/${menu.slug}`}>
//             {menu.title}
//           </Link>
//         ))}
//       </nav>
//     </header>
//   );
// }
