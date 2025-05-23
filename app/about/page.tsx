'use client';

import React from 'react';

export default function AboutPage(): React.ReactElement {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About HOMESTAY.Network</h1>
        
        <div className="prose max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              HOMESTAY.Network is an open-source platform dedicated to connecting travelers with authentic local accommodations worldwide. We believe in creating meaningful connections between hosts and guests, making travel more personal and enriching.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-lg text-gray-700 mb-6">
              Born from the idea that travel should be accessible and authentic, HOMESTAY.Network is a community-driven platform that brings together travelers and hosts from around the globe. As an open-source project, we&apos;re committed to transparency, collaboration, and continuous improvement through community contributions.
            </p>
          </section>

          <section className="mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Community First</h3>
                <p className="text-gray-600">
                  Built by travelers, for travelers. Our platform thrives on community participation and feedback.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Open Source</h3>
                <p className="text-gray-600">
                  Transparent, collaborative, and constantly evolving through community contributions.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Global Network</h3>
                <p className="text-gray-600">
                  Connecting people across borders, cultures, and communities.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-lg text-gray-700 mb-6">
              Whether you&apos;re a traveler seeking authentic experiences or a host wanting to share your space and culture, HOMESTAY.Network welcomes you. As an open-source platform, we also invite developers and contributors to help shape the future of travel accommodation.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Get Involved</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contribute to our open-source codebase</li>
                <li>Share your travel experiences</li>
                <li>Become a host and welcome travelers</li>
                <li>Join our community forums</li>
              </ul>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Start Your Journey</h2>
            <p className="text-lg text-gray-700">
              Ready to experience travel differently? Join HOMESTAY.Network today and become part of our global community.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
