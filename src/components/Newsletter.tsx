
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    // In a real application, you would send this to your backend
    console.log("Subscribing email:", email);
    
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
      duration: 5000,
    });
    
    setEmail('');
  };

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Travel Inspiration</h2>
          <p className="text-lg mb-8 text-white/90">
            Sign up for our newsletter to receive exclusive deals, travel tips, and destination inspiration.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60 flex-1"
              required
            />
            <Button type="submit" variant="secondary" className="px-6">
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm mt-4 text-white/80">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
