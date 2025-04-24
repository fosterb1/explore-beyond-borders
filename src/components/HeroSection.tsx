
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Calendar, Search } from "lucide-react";

const HeroSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search submitted!");
  };

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80" 
          alt="Mountain landscape with sunrays"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      <div className="container-custom relative z-10 text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Explore the World <br />Without Boundaries
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Discover amazing destinations, create unforgettable memories, and experience the joy of travel with us.
        </p>

        {/* Search Form */}
        <div className="bg-white rounded-lg p-4 shadow-lg max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex items-center bg-gray-100 rounded-md px-3">
              <MapPin className="h-5 w-5 text-gray-400 mr-2" />
              <Input 
                type="text" 
                placeholder="Where to?" 
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-black"
              />
            </div>
            <div className="flex-1 flex items-center bg-gray-100 rounded-md px-3">
              <Calendar className="h-5 w-5 text-gray-400 mr-2" />
              <Input 
                type="text" 
                placeholder="When?" 
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-black"
              />
            </div>
            <Button type="submit" className="min-w-[120px]">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
