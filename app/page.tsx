"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const popularDestinations = [
    { 
      name: 'Swiss Alps', 
      image: 'https://images.pexels.com/photos/273809/pexels-photo-273809.jpeg',
      description: 'Luxury chalets with panoramic mountain views and world-class skiing'
    },
    { 
      name: 'Santorini, Greece', 
      image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg',
      description: 'Cliffside villas with stunning Aegean Sea views and sunsets'
    },
    { 
      name: 'Mount Fuji, Japan', 
      image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg',
      description: 'Traditional ryokans with serene mountain and lake views'
    },
    { 
      name: 'Maldives', 
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg',
      description: 'Overwater villas in pristine turquoise lagoons'
    },
    { 
      name: 'Canadian Rockies', 
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg',
      description: 'Mountain lodges with breathtaking lake and forest views'
    },
    { 
      name: 'Norwegian Fjords', 
      image: 'https://images.pexels.com/photos/1559699/pexels-photo-1559699.jpeg',
      description: 'Scenic cabins overlooking dramatic fjord landscapes'
    }
  ];

  const features = [
    { title: '1M+ Beds', description: 'Find your perfect homestay from our extensive global network.' },
    { title: '800+ Universities', description: 'Find homestays near top educational institutions worldwide.' },
    { title: '250+ Global Cities', description: 'Experience authentic local culture around the world.' }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // Stunning mountain landscape
            backgroundImage: "url('https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg')"
          }}
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">World's First Homestay Network</h1>
          <p className="text-xl mb-8">
            Discover extraordinary homes in the world's most breathtaking locations
          </p>
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-2">
            <Input
              type="text"
              placeholder="Search by destination"
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

      {/* Popular Destinations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Extraordinary Destinations
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Experience luxury stays in the world's most spectacular locations
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {popularDestinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer">
                <div className="relative h-80">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all z-10" />
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20 bg-gradient-to-t from-black/70">
                    <h3 className="text-2xl font-semibold mb-2">{destination.name}</h3>
                    <p className="text-sm">{destination.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{
          // Mountain lake view
          backgroundImage: "url('https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg')"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-white">Find Your Dream Getaway</h2>
          <p className="text-xl mb-8 text-white">Join thousands of travelers experiencing extraordinary homes worldwide</p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Image Attribution */}
      <div className="text-center py-4 text-sm text-gray-500">
        Images from <a href="https://www.pexels.com" className="underline hover:text-gray-700" target="_blank" rel="noopener noreferrer">Pexels</a>
      </div>
    </main>
  );
}
