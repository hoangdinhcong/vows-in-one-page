
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Home, MapPin, Image, Gift, Heart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop navigation bar
  const DesktopNavbar = () => (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "py-3 bg-white/90 shadow-md backdrop-blur-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center space-x-8 md:space-x-10">
          <a href="#home" className="text-sm font-medium hover:text-primary-foreground transition-colors">
            Trang Chủ
          </a>
          <a href="#location" className="text-sm font-medium hover:text-primary-foreground transition-colors">
            Địa Điểm
          </a>
          <a href="#home" className="font-serif text-lg tracking-wide text-gray-800 px-4">
            Hoàng Công & Mỹ Duyên
          </a>
          <a href="#gallery" className="text-sm font-medium hover:text-primary-foreground transition-colors">
            Hình Ảnh
          </a>
          <a href="#gifts" className="text-sm font-medium hover:text-primary-foreground transition-colors">
            Quà Tặng
          </a>
          <a href="#rsvp" className="text-sm font-medium hover:text-primary-foreground transition-colors">
            Xác Nhận
          </a>
        </div>
      </div>
    </nav>
  );

  // Mobile floating bottom navigation
  const MobileNavbar = () => (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50 rounded-full bg-white/90 shadow-lg backdrop-blur-md py-3 px-6">
      <div className="flex items-center justify-between">
        <a href="#home" className="flex flex-col items-center text-gray-600 hover:text-primary-foreground transition-colors">
          <Home size={20} />
          <span className="text-xs mt-1">Trang Chủ</span>
        </a>
        <a href="#location" className="flex flex-col items-center text-gray-600 hover:text-primary-foreground transition-colors">
          <MapPin size={20} />
          <span className="text-xs mt-1">Địa Điểm</span>
        </a>
        <a href="#gallery" className="flex flex-col items-center text-gray-600 hover:text-primary-foreground transition-colors">
          <Image size={20} />
          <span className="text-xs mt-1">Hình Ảnh</span>
        </a>
        <a href="#gifts" className="flex flex-col items-center text-gray-600 hover:text-primary-foreground transition-colors">
          <Gift size={20} />
          <span className="text-xs mt-1">Quà Tặng</span>
        </a>
        <a href="#rsvp" className="flex flex-col items-center text-gray-600 hover:text-primary-foreground transition-colors">
          <Heart size={20} />
          <span className="text-xs mt-1">Xác Nhận</span>
        </a>
      </div>
    </nav>
  );

  // Render the appropriate navbar based on screen size
  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};

export default Navbar;
