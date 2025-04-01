"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
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
      <div className="w-full bg-[#F59E0B] text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6 sm:px-12">
          <div className="text-sm sm:text-base lg:text-lg">
            <span className="font-medium">📞 Call Us: +1-800-123-4567</span>
          </div>
          <div className="text-sm sm:text-base lg:text-lg">
            <span className="font-medium">📧 Email: info@atharfoods.com</span>
          </div>
        </div>
      </div>

      {/* Logo and Navigation Area */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-6 px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start">
          <Link href="/">
            <div className="w-48 h-24 relative">
              <Image
                src="/logo.svg"
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
                        "px-4 py-2 text-lg font-semibold text-gray-800 hover:text-[#F59E0B] hover:border-b-2 hover:border-[#F59E0B] transition-all",
                        {
                          "text-[#F59E0B] border-b-2 border-[#F59E0B] font-bold": activeLink === route.href,
                          "text-gray-600": activeLink !== route.href,
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
                      "text-lg font-medium text-gray-800 transition-colors hover:text-[#F59E0B]",
                      {
                        "text-[#F59E0B] font-bold": activeLink === route.href,
                        "text-gray-600": activeLink !== route.href,
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
