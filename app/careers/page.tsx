'use client';

import React from 'react';

export default function CareersPage(): React.ReactElement {
  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Join our core team to build and scale our open-source travel accommodation platform."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Create beautiful, intuitive interfaces that help travelers and hosts connect seamlessly."
    },
    {
      title: "Community Manager",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      description: "Build and nurture our global community of travelers and hosts."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Maintain and improve our infrastructure and deployment processes."
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Join Our Team</h1>

        <div className="prose max-w-none">
          {/* Mission Section */}
          <section className="mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              We're building the future of travel accommodation through open-source technology and community collaboration. 
              Join us in making authentic travel experiences accessible to everyone.
            </p>
          </section>

          {/* Why Join Us */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Why Join HOMESTAY.Network?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Open Source Impact</h3>
                <p className="text-gray-600">
                  Contribute to an open-source platform that's changing how people travel and connect globally.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Remote-First Culture</h3>
                <p className="text-gray-600">
                  Work from anywhere in the world with our distributed team of passionate individuals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Growth & Learning</h3>
                <p className="text-gray-600">
                  Continuous learning opportunities and career development support.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Inclusive Environment</h3>
                <p className="text-gray-600">
                  Be part of a diverse, global team that values different perspectives.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Benefits</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Competitive salary and equity
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Flexible working hours
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Learning & development budget
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Home office setup allowance
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Annual team retreats
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Health and wellness benefits
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Paid time off & holidays
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Travel perks and discounts
                </li>
              </ul>
            </div>
          </section>

          {/* Open Positions */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Open Positions</h2>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {position.department}
                    </span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {position.location}
                    </span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {position.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Don't see the right role?</h2>
            <p className="text-lg text-gray-700 mb-6">
              We're always looking for talented individuals to join our team. 
              Send your resume to <a href="mailto:careers@homestay.network" className="text-blue-600 hover:underline">careers@homestay.network</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
