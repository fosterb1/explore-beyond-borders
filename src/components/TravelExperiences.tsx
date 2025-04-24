
import React from 'react';
import ExperienceCard from './ExperienceCard';
import { Button } from "@/components/ui/button";
import { Mountain, Beach, Compass, Map } from 'lucide-react';

const TravelExperiences = () => {
  const experiences = [
    {
      id: 1,
      icon: <Mountain className="h-6 w-6 text-white" />,
      title: "Mountain Climbing",
      description: "Challenge yourself with thrilling climbs on the world's most beautiful peaks.",
      color: "bg-blue-500"
    },
    {
      id: 2,
      icon: <Beach className="h-6 w-6 text-white" />,
      title: "Beach Relaxation",
      description: "Unwind on pristine beaches with crystal-clear waters and golden sands.",
      color: "bg-secondary"
    },
    {
      id: 3,
      icon: <Compass className="h-6 w-6 text-white" />,
      title: "Adventure Tours",
      description: "Embark on guided adventures through untamed wilderness and exotic locations.",
      color: "bg-green-500"
    },
    {
      id: 4,
      icon: <Map className="h-6 w-6 text-white" />,
      title: "Cultural Immersion",
      description: "Experience local cultures, traditions, and cuisines like a true native.",
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="flex items-center gap-2 mb-3">
          <Compass className="h-6 w-6 text-primary" />
          <span className="text-primary font-medium">EXPERIENCES</span>
        </div>
        <h2 className="section-title">Unforgettable Travel Experiences</h2>
        <p className="section-subtitle max-w-2xl">
          Discover unique and extraordinary experiences that will transform your journey into a lifetime memory.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              icon={experience.icon}
              title={experience.title}
              description={experience.description}
              color={experience.color}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button>
            Browse All Experiences
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TravelExperiences;
