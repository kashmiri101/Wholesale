"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-[#F59E0B] py-8">
      <div className="container mx-auto px-6">
        {/* Footer Content Wrapper */}
        <div className="flex flex-wrap justify-between space-y-6 md:space-y-0">
          {/* Logo Section */}
          <div className="w-full md:w-1/4 flex justify-start">
            <Link href="/">
              <div className="w-32 h-16 relative">
                <Image
                  src="/logo-white.svg" // Update with your logo path
                  alt="Company Logo"
                  fill
                  className="h-auto w-auto"
                />
              </div>
            </Link>
          </div>
           {/* Business Info Section */}
           <div className="w-full md:w-1/4 text-sm text-gray-400 text-left">
            <p className="font-semibold mb-2">Head Office</p>
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
          <div className="w-full md:w-1/4 text-sm flex flex-col space-y-4">
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/faq" className="hover:text-white">FAQ</Link>
            <Link href="/blog" className="hover:text-white">Blog</Link>
          </div>

         

          {/* Social Media Section */}
          <div className="w-full md:w-1/4 text-sm flex flex-col space-y-4">
            <Link href="https://www.linkedin.com" target="_blank" className="hover:text-white">LinkedIn</Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-white">Twitter</Link>
            <Link href="https://facebook.com" target="_blank" className="hover:text-white">Facebook</Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-white">Instagram</Link>
            <Link href="https://youtube.com" target="_blank" className="hover:text-white">YouTube</Link>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-xs text-gray-400 mt-6">
          <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
