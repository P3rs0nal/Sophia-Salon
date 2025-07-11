import React from 'react';

export default function Hero() {
  return (
    <section 
      className="relative h-[80vh] bg-cover bg-center" 
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* brand3 overlay at 60% opacity */}
      <div className="absolute inset-0 bg-strawberry/60 flex items-center justify-center">
        <h1 className="text-5xl sm:text-6xl font-cursive text-white text-center px-4">
          Lettuce 🥬
        </h1>
      </div>
    </section>
  );
}
