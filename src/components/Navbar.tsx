
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

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
          ? "py-3 bg-white bg-opacity-95 shadow-sm backdrop-blur-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-center md:justify-between items-center">
        <div className="hidden md:block font-serif text-lg tracking-wide text-gray-800">
          Alex & Taylor
        </div>
        
        <div className="flex space-x-8">
          <a href="#home" className="text-sm font-medium hover:text-primary-foreground">
            Home
          </a>
          <a href="#location" className="text-sm font-medium hover:text-primary-foreground">
            Location
          </a>
          <a href="#gallery" className="text-sm font-medium hover:text-primary-foreground">
            Gallery
          </a>
          <a href="#rsvp" className="text-sm font-medium hover:text-primary-foreground">
            RSVP
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
