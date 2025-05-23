"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const popularCities = [
    { name: 'London', image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg' },
    { name: 'New York', image: 'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg' },
    { name: 'Paris', image: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg' },
    { name: 'Tokyo', image: 'https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg' }
  ];

  const features = [
    { title: '1M+ Beds', description: 'Book your perfect place from an extensive list of options.' },
    { title: '800+ Universities', description: 'Find the best student homes near prestigious universities.' },
    { title: '250+ Global Cities', description: 'We operate in major cities around the world.' }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg')"
          }}
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6">Home away from home</h1>
          <p className="text-xl mb-8">
            Book student accommodations near top universities and cities across the globe
          </p>
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-2">
            <Input
              type="text"
              placeholder="Search by city, university or property"
              className="w-full text-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Cities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Cities Across the Globe
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {popularCities.map((city, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer">
                <div className="relative h-64">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all z-10" />
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
                    <h3 className="text-xl font-semibold">{city.name}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to find your perfect student home?</h2>
          <p className="text-xl mb-8">Join thousands of students who have already found their ideal accommodation</p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            Get Started
          </Button>
        </div>
      </section>
    </main>
  );
}
