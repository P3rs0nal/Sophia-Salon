import React from 'react';

export default function Hero() {
  return (
    <section className="h-96 bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
      <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-4xl text-white font-bold">Welcome to Sophia's Salon</h1>
      </div>
    </section>
  );
}