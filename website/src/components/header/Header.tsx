// components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Button from "../button/Button";
import { Menu } from "../../types/menusTypes";

// type Menu = { id: number; name: string; slug: string; title: string };

export default function Header({ menus }: { menus: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log("headermenus", menus);
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
      <nav className="hidden lg:flex gap-4">
        {menus.map((menu: any) => (
          <Link key={`${menu.id}-${menu.slug}`} href={`/${menu.slug}`}>
            {menu.name}
          </Link>
        ))}
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

            {/* Mobile Links */}
            <nav className="flex flex-col gap-4 mt-8">
              {menus.map((menu: any) => (
                <Link
                  key={`${menu.id}-${menu.slug}`}
                  href={`/${menu.slug}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {menu.name}
                </Link>
              ))}
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
