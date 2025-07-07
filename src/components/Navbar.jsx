import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { currentUser } = useAuth();
  const nav = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    nav('/login', { replace: true });
  };

  // Redirect helper for booking link
  const goBooking = () => {
    if (!currentUser) return nav('/login', { replace: true });
    nav('/booking');
  };

  return (
    <nav className="fixed top-0 w-full bg-brand2/90 backdrop-blur p-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-heading nav-link">Sophia’s Salon</Link>

        {/* desktop menu */}
        <div className="hidden sm:flex space-x-6">
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/gallery" className="nav-link">Gallery</Link>
          <Link to="/testimonials" className="nav-link">Testimonials</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          {currentUser
            ? <button onClick={goBooking} className="btn-primary">Book Now</button>
            : <button onClick={goBooking} className="btn-primary">Book Now</button>
          }
          {currentUser
            ? <button onClick={handleLogout} className="nav-link">Logout</button>
            : <>
                <button onClick={() => nav('/login')} className="nav-link">Login</button>
                <button onClick={() => nav('/signup')} className="nav-link">Sign Up</button>
              </>
          }
        </div>

        {/* mobile toggle */}
        <button className="sm:hidden" onClick={() => setOpen(o => !o)}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="sm:hidden bg-brand2 shadow-inner">
          {["services","gallery","testimonials","about","contact"].map(p => (
            <Link 
              key={p}
              to={`/${p}`} 
              onClick={() => setOpen(false)} 
              className="block p-4 nav-link"
            >{p.charAt(0).toUpperCase()+p.slice(1)}</Link>
          ))}

          <button 
            onClick={() => { setOpen(false); goBooking(); }} 
            className="block w-full text-center p-4 btn-primary"
          >
            Book Now
          </button>

          {currentUser
            ? <button onClick={() => { setOpen(false); handleLogout(); }} className="block w-full text-center p-4 nav-link">Logout</button>
            : <>
                <button onClick={() => { setOpen(false); nav('/login'); }} className="block w-full text-center p-4 nav-link">Login</button>
                <button onClick={() => { setOpen(false); nav('/signup'); }} className="block w-full text-center p-4 nav-link">Sign Up</button>
              </>
          }
        </div>
      )}
    </nav>
  );
}