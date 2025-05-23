'use client';

import React from 'react';

export default function HowItWorksPage(): React.ReactElement {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">How HOMESTAY.Network Works</h1>

        <div className="prose max-w-none">
          {/* For Travelers */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">For Travelers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-blue-600 mb-4">1</div>
                <h3 className="text-xl font-semibold mb-3">Search</h3>
                <p className="text-gray-600">
                  Browse through our extensive list of accommodations. Filter by location, price, amenities, and more to find your perfect stay.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-blue-600 mb-4">2</div>
                <h3 className="text-xl font-semibold mb-3">Book</h3>
                <p className="text-gray-600">
                  Select your dates, review the details, and book securely through our platform. Communication with hosts is easy and direct.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-blue-600 mb-4">3</div>
                <h3 className="text-xl font-semibold mb-3">Stay</h3>
                <p className="text-gray-600">
                  Enjoy your authentic local experience. Rate and review your stay to help other travelers make informed decisions.
                </p>
              </div>
            </div>
          </section>

          {/* For Hosts */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">For Hosts</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-blue-600 mb-4">1</div>
                <h3 className="text-xl font-semibold mb-3">List</h3>
                <p className="text-gray-600">
                  Create your listing with detailed descriptions, high-quality photos, and set your own house rules and pricing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-blue-600 mb-4">2</div>
                <h3 className="text-xl font-semibold mb-3">Host</h3>
                <p className="text-gray-600">
                  Welcome guests from around the world. Share your local knowledge and create memorable experiences.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-blue-600 mb-4">3</div>
                <h3 className="text-xl font-semibold mb-3">Earn</h3>
                <p className="text-gray-600">
                  Receive secure payments for your bookings. Build your reputation through guest reviews and ratings.
                </p>
              </div>
            </div>
          </section>

          {/* Safety & Trust */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Safety & Trust</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Verified Profiles</h3>
                  <p className="text-gray-600 mb-4">
                    All users undergo verification processes to ensure safety and trust within our community.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
                  <p className="text-gray-600 mb-4">
                    All transactions are processed securely through our platform with protection for both hosts and guests.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                  <p className="text-gray-600 mb-4">
                    Our support team is available around the clock to assist with any issues or questions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Reviews & Ratings</h3>
                  <p className="text-gray-600 mb-4">
                    Transparent review system helps maintain quality and trust in our community.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Open Source */}
          <section className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-6">Open Source Platform</h2>
            <p className="text-lg text-gray-700 mb-6">
              As an open-source platform, we believe in transparency and community-driven development. 
              Developers can contribute to our codebase and help shape the future of travel accommodation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
