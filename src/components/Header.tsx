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
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const routes = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/commitment", label: "COMMITMENT" },
  { 
    href: "/products", 
    label: "PRODUCTS",
    subRoutes: [
      { href: "/seafood", label: "SEA FOOD" },
      
      // { href: "/products/dairy", label: "DAIRY PRODUCTS" },
      // { href: "/products/frozen", label: "FROZEN FOODS" },
      // { href: "/products/spices", label: "HERBS & SPICES" }
    ]
  },
  { href: "/services", label: "SERVICES" },
  { href: "/source", label: "SOURCE" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const handleSubMenuToggle = (route: string) => {
    setOpenSubMenu(openSubMenu === route ? null : route);
  };

  return (
    <header className="w-full bg-white shadow-lg">
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
            <div className="w-48 sm:w-56 h-28 sm:h-32 relative">
              <Image
                src="./3x.png"
                alt="Athar Foods Logo"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              {routes.map((route) => (
                <NavigationMenuItem 
                  key={route.href}
                  onMouseEnter={() => route.subRoutes && setOpenSubMenu(route.href)}
                  onMouseLeave={() => setOpenSubMenu(null)}
                >
                  {route.subRoutes ? (
                    <>
                      <NavigationMenuTrigger
                        className={cn(
                          "px-3 py-2 text-sm font-medium transition-colors bg-transparent hover:bg-[#095b35]/10",
                          {
                            "text-[#095b35]": activeLink.startsWith(route.href),
                            "text-gray-700": !activeLink.startsWith(route.href),
                          }
                        )}
                      >
                        {route.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="rounded-lg shadow-xl border mt-2">
                        <div className="grid w-[200px] gap-1 p-2">
                          {route.subRoutes.map((subRoute) => (
                            <Link
                              key={subRoute.href}
                              href={subRoute.href}
                              legacyBehavior
                              passHref
                            >
                              <NavigationMenuLink
                                className={cn(
                                  "px-4 py-2.5 text-sm font-medium hover:bg-[#095b35]/10 rounded-md transition-colors",
                                  {
                                    "text-[#095b35] bg-[#095b35]/10":
                                      activeLink === subRoute.href,
                                    "text-gray-700": activeLink !== subRoute.href,
                                  }
                                )}
                              >
                                {subRoute.label}
                              </NavigationMenuLink>
                            </Link>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={route.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          "px-3 py-2 text-sm font-medium transition-colors hover:bg-[#095b35]/10 rounded-md",
                          {
                            "text-[#095b35]": activeLink === route.href,
                            "text-gray-700": activeLink !== route.href,
                          }
                        )}
                      >
                        {route.label}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 hover:bg-[#095b35]/10"
              >
                <Menu className="h-5 w-5 text-gray-800" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white shadow-xl w-[280px]">
              <nav className="flex flex-col gap-2 mt-8">
                {routes.map((route) => (
                  <div key={route.href} className="border-b last:border-0">
                    {route.subRoutes ? (
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => handleSubMenuToggle(route.href)}
                            className={cn(
                              "text-sm font-medium px-4 py-3 w-full text-left",
                              {
                                "text-[#095b35] bg-[#095b35]/10":
                                  activeLink.startsWith(route.href),
                                "text-gray-700 hover:bg-gray-50":
                                  !activeLink.startsWith(route.href),
                              }
                            )}
                          >
                            {route.label}
                          </button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 mr-2"
                            onClick={() => handleSubMenuToggle(route.href)}
                          >
                            <svg
                              className={cn(
                                "h-4 w-4 transition-transform",
                                openSubMenu === route.href ? "rotate-180" : ""
                              )}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </Button>
                        </div>
                        {openSubMenu === route.href && (
                          <div className="ml-4 pl-2 border-l-2 border-gray-200">
                            {route.subRoutes.map((subRoute) => (
                              <Link
                                key={subRoute.href}
                                href={subRoute.href}
                                className={cn(
                                  "text-sm font-medium px-4 py-2.5 block hover:bg-gray-50 rounded-r",
                                  {
                                    "text-[#095b35] border-l-2 border-[#095b35] -ml-[2px]":
                                      activeLink === subRoute.href,
                                    "text-gray-700": activeLink !== subRoute.href,
                                  }
                                )}
                              >
                                {subRoute.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={route.href}
                        className={cn(
                          "text-sm font-medium px-4 py-3 block",
                          {
                            "text-[#095b35] bg-[#095b35]/10": 
                              activeLink === route.href,
                            "text-gray-700 hover:bg-gray-50":
                              activeLink !== route.href,
                          }
                        )}
                      >
                        {route.label}
                      </Link>
                    )}
                  </div>
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