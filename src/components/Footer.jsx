import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brandGray pt-12 pb-6 text-center text-sm text-gray-600">
      <p>&copy; {new Date().getFullYear()} Sophia’s Salon. All rights reserved.</p>
      <div className="mt-4 space-x-4">
        <a href="#" className="hover:text-brandPink">Privacy Policy</a>
        <a href="#" className="hover:text-brandPink">Terms of Service</a>
      </div>
    </footer>
  );
}