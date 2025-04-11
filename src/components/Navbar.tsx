
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "py-3 bg-white/90 shadow-md backdrop-blur-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6">
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="flex items-center justify-center space-x-8 md:space-x-10">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#home" className="text-sm font-medium hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#location" className="text-sm font-medium hover:text-primary-foreground transition-colors">
                  Location
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuLink asChild>
                <a href="#home" className="font-serif text-lg tracking-wide text-gray-800 px-4">
                  Alex & Taylor
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#gallery" className="text-sm font-medium hover:text-primary-foreground transition-colors">
                  Gallery
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#gifts" className="text-sm font-medium hover:text-primary-foreground transition-colors">
                  Gifts
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#rsvp" className="text-sm font-medium hover:text-primary-foreground transition-colors">
                  RSVP
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navbar;
