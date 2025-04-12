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
  { href: "/products", label: "PRODUCTS" },
  { href: "/services", label: "SERVICES" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <header className="w-full bg-white shadow-lg">
      {/* Contact Information - Top Stripe */}
      <div className="w-full bg-[#03468a] text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6 sm:px-12">
          <div className="text-sm sm:text-base lg:text-lg font-medium">
            📞 Call Us: +1-800-123-4567
          </div>
          <div className="text-sm sm:text-base lg:text-lg font-medium">
            📧 Email: info@atharfoods.com
          </div>
        </div>
      </div>

      {/* Logo and Navigation */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-6 px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start">
          <Link href="/">
            <div className="w-52 h-32 relative">
              <Image
                src="/3x.png"
                alt="Athar Foods Logo"
                fill
                priority
                className="h-auto w-auto"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-8">
              {routes.map((route) => (
                <NavigationMenuItem key={route.href}>
                  <Link href={route.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "px-4 py-2 text-lg font-semibold transition-all",
                        {
                          "text-[#095b35] border-b-2 border-[#095b35] font-bold":
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
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-gray-800" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white shadow-lg">
              <nav className="flex flex-col gap-6 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "text-lg font-medium transition-colors",
                      {
                        "text-[#095b35] font-bold": activeLink === route.href,
                        "text-gray-700 hover:text-[#095b35]":
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
    </header>
  );
}
