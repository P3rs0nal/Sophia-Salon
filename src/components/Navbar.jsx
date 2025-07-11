import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Close mobile menu on route change
  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login', { replace: true });
  };

  const goBooking = () => {
    if (!currentUser) return navigate('/login', { replace: true });
    navigate('/booking');
  };

  const commonClass = "px-4 py-2 text-sm font-medium nav-link";

  return (
    <nav className="fixed top-0 w-full bg-bg/90 backdrop-blur p-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-4xl font-cursive nav-link">
          Sophia’s Salon
        </Link>
        <div>
          {currentUser && (
            <span className="text-xl font-cursive">
              {currentUser.email}
            </span>
          )}
        </div>
        {/* desktop menu */}
        <div className="hidden sm:flex items-center space-x-2">
          <Link to="/services" className={commonClass}>Services</Link>
          <Link to="/gallery" className={commonClass}>Gallery</Link>
          <Link to="/testimonials" className={commonClass}>Testimonials</Link>
          <Link to="/about" className={commonClass}>About</Link>
          <Link to="/contact" className={commonClass}>Contact</Link>
          <button onClick={goBooking} className={commonClass}>Book Now</button>
          {currentUser ? (
            <>
              <span className="px-4 py-2 text-sm text-strawberry">{currentUser.email}</span>
              <button onClick={handleLogout} className={commonClass}>Logout</button>
            </>
          ) : (
            <>
              <button onClick={() => navigate('/login')} className={commonClass}>Login</button>
              <button onClick={() => navigate('/signup')} className={commonClass}>Sign Up</button>
            </>
          )}
        </div>

        {/* mobile toggle */}
        <button className="sm:hidden p-2" onClick={() => setOpen(o => !o)}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="sm:hidden bg-bg shadow-inner">
          {['services','gallery','testimonials','about','contact'].map(p => (
            <Link
              key={p}
              to={`/${p}`}
              className="block px-4 py-4 nav-link"
            >
              {p.charAt(0).toUpperCase()+p.slice(1)}
            </Link>
          ))}
          <button
            onClick={goBooking}
            className="block w-full text-left px-4 py-4 nav-link"
          >
            Book Now
          </button>
          {currentUser ? (
            <>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-4 nav-link"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate('/login')}
                className="block w-full text-left px-4 py-4 nav-link"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="block w-full text-left px-4 py-4 nav-link"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}