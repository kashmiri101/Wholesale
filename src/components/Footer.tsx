"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <div className="w-36 h-18 relative">
                <Image
                  src="/logo-white.svg"
                  alt="Athar Foods Logo"
                  fill
                  className="h-auto w-auto"
                />
              </div>
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            <span className="block md:inline-block md:border-r border-gray-600 pr-3 mr-3">
              COPYRIGHT © {new Date().getFullYear()} ATHAR FOODS
            </span>
            <span className="block md:inline-block">
              DEVELOPED WITH ❤️ FOR YOUR BUSINESS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
