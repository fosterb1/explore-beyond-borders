
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PopularDestinations from '@/components/PopularDestinations';
import TravelExperiences from '@/components/TravelExperiences';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PopularDestinations />
      <TravelExperiences />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
