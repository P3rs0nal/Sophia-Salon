import React from 'react';

export default function Hero() {
  return (
    <section 
      className="relative h-[80vh] bg-cover bg-center" 
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* brand3 overlay at 60% opacity */}
      <div className="stack absolute inset-0 bg-strawberry/60 flex items-center justify-center">
        <h1 className="text-5xl sm:text-6xl font-cursive text-white text-center px-4">
          Welcome to Sophia’s Salon
        </h1>
        <p className='padding stack text-matcha flex items-center font-body text-xl' style={{width: '80%', textAlign: 'center'}}>
          We specialize in gel manicures, acrylics, and custom nail art to make your nails shine.
        </p>
      </div>
    </section>
  );
}
