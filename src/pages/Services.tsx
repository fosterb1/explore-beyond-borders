
import React from 'react';
import Navbar from '@/components/Navbar';
import { Shield, Users, Globe } from 'lucide-react';
import Footer from '@/components/Footer';

const Services = () => {
  const services = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Strategy Consulting",
      description: "Develop winning strategies to drive your business forward with our expert consultants."
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Business Operations",
      description: "Optimize your operations and improve efficiency with our comprehensive solutions."
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Digital Transformation",
      description: "Transform your business for the digital age with cutting-edge solutions and expertise."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl font-bold mb-6">Our Services</h1>
              <p className="text-lg text-gray-600">
                We offer comprehensive consulting services to help your business thrive in today's competitive landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
