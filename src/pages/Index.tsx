
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import LocationSection from "../components/LocationSection";
import GallerySection from "../components/GallerySection";
import RsvpSection from "../components/RsvpSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <LocationSection />
      <GallerySection />
      <RsvpSection />
      
      <footer className="py-8 bg-white text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Alex & Taylor</p>
      </footer>
    </div>
  );
};

export default Index;
