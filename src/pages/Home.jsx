import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container mx-auto p-6 text-center">
        <h1 className='padding text-matcha'>
          Book your appointment today!
        </h1>
        <Link to="/booking" className="btn-primary">Book Your Appointment</Link>
      </div>
      <hr className="section-divider" />
      {/* You can insert <Testimonials /> preview section here if desired */}
    </>
  );
}