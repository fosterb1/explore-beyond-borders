
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Compass, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-white/95 backdrop-blur-md fixed w-full top-0 z-50 shadow-sm">
      <div className="container-custom flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Compass className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Explore Beyond</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-foreground hover:text-primary transition-colors">Destinations</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Experiences</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">About Us</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Contact</a>
          <Button>Plan Your Trip</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground p-2">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Destinations</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Experiences</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors py-2">About Us</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Contact</a>
            <Button className="w-full">Plan Your Trip</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
