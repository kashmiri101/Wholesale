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
  { href: "/products", label: "PRODUCTS" },
  { href: "/services", label: "SERVICES" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <header className="w-full">
      {/* Red top stripe */}
      <div className="w-full h-6 bg-red-600" />

      {/* Logo and navigation area */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <Link href="/">
            <div className="flex flex-col items-center">
              <div className="w-48 h-24 relative">
                <Image
                  src="/logo.svg"
                  alt="Athar Foods Logo"
                  fill
                  priority
                  className="h-auto w-auto"
                />
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {routes.map((route) => (
                <NavigationMenuItem key={route.href}>
                  <Link href={route.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "px-4 py-2 text-base font-medium hover:text-blue-700 border-b-0 hover:border-b-2 hover:border-blue-700 transition-colors",
                        {
                          "text-blue-700 border-b-2 border-blue-700 font-bold": activeLink === route.href,
                          "text-gray-700": activeLink !== route.href,
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
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-blue-700",
                      {
                        "text-blue-700 font-bold": activeLink === route.href,
                        "text-gray-700": activeLink !== route.href,
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

      {/* Bottom border */}
      <div className="w-full h-px bg-gray-200" />
    </header>
  );
}
