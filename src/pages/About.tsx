
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6">About ConsultPro</h1>
                <p className="text-lg text-gray-600 mb-6">
                  We are a leading consulting firm with over 15 years of experience helping businesses achieve their goals.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <Award className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">Award-winning consultancy</h3>
                    <p className="text-gray-600">Recognized for excellence in business consulting</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Team meeting"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
