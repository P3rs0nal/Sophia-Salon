import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center p-4">
      <p>&copy; {new Date().getFullYear()} Sophia's Salon. All rights reserved.</p>
    </footer>
  );
}