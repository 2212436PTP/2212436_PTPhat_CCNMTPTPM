"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/src/components/theme-toggle";

const navItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/about", label: "Giới thiệu" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Dự án" },
  { href: "/skills", label: "Kỹ năng" },
  { href: "/contact", label: "Liên hệ" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800 shadow-sm backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-emerald-600 tracking-tight"
          >
            Phan Thành Phát
          </Link>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Mở menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Mở menu</span>
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 border-t border-gray-200 dark:border-gray-800 pt-4 space-y-2 animate-[fade-in_200ms_ease-out]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-gray-800 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
