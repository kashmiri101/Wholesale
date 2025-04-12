"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        {/* Footer Content Wrapper */}
        <div className="flex flex-wrap justify-between space-y-6 md:space-y-0">
          {/* Logo Section */}
          <div className="w-full md:w-1/4 flex justify-start">
            <Link href="/">
              <div className="w-48 h-16 relative">
                <Image
                  src="/3x.png" // Ensure this is the correct path for your logo
                  alt="Athar Foods Logo"
                  width={192} // Adjust to match the size
                  height={64} // Adjust to match the size
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Business Info Section */}
          <div className="w-full md:w-1/4 text-sm text-gray-300 text-left">
            <p className="font-semibold mb-2 text-white">Head Office</p>
            <p>123 Main Street, Suite 100</p>
            <p>Cityville, XY 12345</p>
            <p>Business Hours: 9 AM - 5 PM (Mon - Fri)</p>
            <p className="mt-4">Phone: +1 (555) 123-4567</p>
            <p>
              Email:{" "}
              <a href="mailto:info@company.com" className="text-[#F59E0B] hover:text-white">
                info@company.com
              </a>
            </p>
          </div>

          {/* Quicklinks Section */}
          <div className="w-full md:w-1/4 text-sm flex flex-col space-y-4 text-gray-300">
            <Link href="/about" className="hover:text-[#F59E0B]">About</Link>
            <Link href="/services" className="hover:text-[#F59E0B]">Services</Link>
            <Link href="/contact" className="hover:text-[#F59E0B]">Contact</Link>
            <Link href="/faq" className="hover:text-[#F59E0B]">FAQ</Link>
            <Link href="/blog" className="hover:text-[#F59E0B]">Blog</Link>
          </div>

          {/* Social Media Section */}
          <div className="w-full md:w-1/4 text-sm flex flex-col space-y-4 text-gray-300">
            <Link href="https://www.linkedin.com" target="_blank" className="hover:text-[#F59E0B]">LinkedIn</Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-[#F59E0B]">Twitter</Link>
            <Link href="https://facebook.com" target="_blank" className="hover:text-[#F59E0B]">Facebook</Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-[#F59E0B]">Instagram</Link>
            <Link href="https://youtube.com" target="_blank" className="hover:text-[#F59E0B]">YouTube</Link>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-xs text-gray-400 mt-8">
          <p>© {new Date().getFullYear()} Athar Foods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
