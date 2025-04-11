
import React from "react";
import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/30 to-white pt-16"
    >
      <div className="text-center px-6 fade-in" style={{ animationDelay: "0.2s" }}>
        <p className="font-serif text-xl mb-4 text-gray-600">We're getting married</p>
        
        <h1 className="font-serif text-5xl md:text-7xl font-medium mb-6 text-gray-800">
          Alex & Taylor
        </h1>
        
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-12 bg-gray-300"></div>
          <Heart className="mx-4 text-primary" size={24} />
          <div className="h-px w-12 bg-gray-300"></div>
        </div>
        
        <p className="font-sans uppercase tracking-widest text-lg mb-8">
          SEPTEMBER 25, 2024
        </p>
        
        <a
          href="#rsvp"
          className="button-primary inline-block"
        >
          RSVP
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
