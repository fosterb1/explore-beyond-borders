
import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "The trip to Yosemite was absolutely breathtaking. The guides were knowledgeable and the accommodations were perfect. Can't wait to book my next adventure!",
      author: "Sarah Johnson",
      location: "New York, USA",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      rating: 5
    },
    {
      id: 2,
      quote: "Our family vacation to Bali was flawlessly organized. Everything from transportation to activities exceeded our expectations. Highly recommended!",
      author: "Michael Chen",
      location: "Toronto, Canada",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      id: 3,
      quote: "The cultural tour through Italy was a dream come true. The local experiences and hidden gems we discovered would never have been possible without this company.",
      author: "Emma Rodriguez",
      location: "London, UK",
      image: "https://randomuser.me/api/portraits/women/23.jpg",
      rating: 4
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Travelers Say</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Real experiences from real travelers who have explored the world with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              location={testimonial.location}
              image={testimonial.image}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
