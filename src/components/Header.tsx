"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const routes = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/commitment", label: "COMMITMENT" },
  { href: "/products", label: "PRODUCTS" },
  { href: "/services", label: "SERVICES" },
  { href: "/source", label: "SOURCE" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <header className="w-full bg-white shadow-lg overflow-x-hidden">
      {/* Contact Information - Top Stripe */}
      <div className="w-full bg-[#03468a] text-white py-3">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center px-4 gap-2 sm:gap-0">
          <div className="text-xs sm:text-sm font-medium whitespace-nowrap">
            📞 Call Us: 587-717-8930
          </div>
          <div className="text-xs sm:text-sm font-medium whitespace-nowrap">
            📧 Email: info@bostangroup.com
          </div>
        </div>
      </div>

      {/* Logo and Navigation */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
          <Link href="/">
            <div className="w-40 sm:w-48 h-24 sm:h-28 relative">
              <Image
                src="./3x.png"
                alt="Athar Foods Logo"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 208px"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center overflow-x-auto no-scrollbar">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-wrap gap-2">
              {routes.map((route) => (
                <NavigationMenuItem key={route.href}>
                  <Link href={route.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "px-2 py-1 text-sm font-medium transition-all whitespace-nowrap",
                        {
                          "text-[#095b35] border-b-2 border-[#095b35]":
                            activeLink === route.href,
                          "text-gray-700 hover:text-[#095b35] hover:border-b-2 hover:border-[#095b35]":
                            activeLink !== route.href,
                        }
                      )}
                    >
                      {route.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden absolute right-4 top-24 sm:top-28">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Menu className="h-5 w-5 text-gray-800" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white shadow-lg w-[70vw] max-w-xs">
              <nav className="flex flex-col gap-3 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "text-sm font-medium px-4 py-2",
                      {
                        "text-[#095b35] bg-[#095b35]/10 rounded": 
                          activeLink === route.href,
                        "text-gray-700 hover:text-[#095b35] hover:bg-gray-100 rounded":
                          activeLink !== route.href,
                      }
                    )}
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="w-full h-px bg-gray-200" />

      {/* Add this to your global CSS or in a style tag */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </header>
  );
}