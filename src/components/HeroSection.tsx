
import React from "react";
import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-6 flex items-center justify-center h-full">
        <div className="text-center px-6 py-10 fade-in z-10 bg-transparent backdrop-blur-sm max-w-md mx-auto rounded-lg" style={{ animationDelay: "0.2s" }}>
          <p className="font-serif text-xl mb-4 text-white">Chúng tôi sắp kết hôn</p>
          
          <h1 className="font-serif text-4xl md:text-6xl font-medium mb-6 text-white">
            Hoàng Công & Mỹ Duyên
          </h1>
          
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-12 bg-white/50"></div>
            <Heart className="mx-4 text-white" size={24} />
            <div className="h-px w-12 bg-white/50"></div>
          </div>
          
          <p className="font-sans uppercase tracking-widest text-lg mb-8 text-white">
            17:00, NGÀY 1 THÁNG 5, 2025
          </p>
          
          <a
            href="#rsvp"
            className="button-primary inline-block hover:bg-white/20 border border-white text-white hover:text-white transition-all"
          >
            Xác nhận tham dự
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
