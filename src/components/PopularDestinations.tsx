
import React from 'react';
import DestinationCard from './DestinationCard';
import { Button } from "@/components/ui/button";
import { Compass } from "lucide-react";

const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      name: "Yosemite National Park",
      location: "California, USA",
      price: "249",
      rating: 4.8
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      name: "Alpine Mountains",
      location: "Switzerland",
      price: "349",
      rating: 4.9
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      name: "Tropical Paradise",
      location: "Bali, Indonesia",
      price: "299",
      rating: 4.7
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      name: "Mountain Alps",
      location: "Italy",
      price: "279",
      rating: 4.6
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="flex items-center gap-2 mb-3">
          <Compass className="h-6 w-6 text-primary" />
          <span className="text-primary font-medium">TOP DESTINATIONS</span>
        </div>
        <h2 className="section-title">Popular Destinations</h2>
        <p className="section-subtitle max-w-2xl">
          Explore our handpicked selection of the most sought-after travel destinations around the globe.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              image={destination.image}
              name={destination.name}
              location={destination.location}
              price={destination.price}
              rating={destination.rating}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button>
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
