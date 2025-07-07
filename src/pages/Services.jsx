import React from 'react';

const services = [
  { id: 1, name: 'Gel Manicure', description: '60-minute gel polish application', price: 45 },
  { id: 2, name: 'Acrylic Full Set', description: 'Includes nail shaping and acrylic overlay', price: 55 },
  { id: 3, name: 'Custom Nail Art', description: 'Hand-painted designs, price per nail', price: 5 },
];

export default function Services() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-heading mb-8 text-center">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map(s => (
          <div 
            key={s.id} 
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-heading mb-2">{s.name}</h3>
            <p className="mb-4">{s.description}</p>
            <p className="font-semibold text-lg">${s.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}