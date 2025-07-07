import React from 'react';

export default function Hero() {
  return (
    <section 
      className="relative h-[80vh] bg-cover bg-center" 
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 className="text-5xl sm:text-6xl font-heading text-white text-center px-4">
          Lettuce
        </h1>
      </div>
    </section>
  );
}