import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-3xl font-heading mb-4">Welcome to Sophia’s Salon</h2>
        <p className="mb-6">
          We specialize in gel manicures, acrylics, and custom nail art to make your nails shine.
        </p>
        <Link to="/booking" className="btn-primary">Book Your Appointment</Link>
      </div>
      <hr className="section-divider" />
      {/* You can insert <Testimonials /> preview section here if desired */}
    </>
  );
}