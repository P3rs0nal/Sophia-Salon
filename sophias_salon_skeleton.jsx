/*
Project: Sophia's Salon
Tech Stack: React, React Router, Firebase (Auth, Firestore, Hosting), Tailwind CSS

File Structure:

sophias-salon/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   └── BookingForm.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Gallery.jsx
│   │   ├── Testimonials.jsx
│   │   └── Contact.jsx
│   ├── firebase.js
│   ├── App.jsx
│   └── index.jsx
├── .firebaserc
├── firebase.json
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
*/

/* ---------- package.json ---------- */
{
  "name": "sophias-salon",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.4.0",
    "firebase": "^9.22.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.3.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "serve": "firebase serve",
    "deploy": "firebase deploy"
  }
}

/* ---------- tailwind.config.js ---------- */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: { extend: {} },
  plugins: []
};

/* ---------- firebase.json ---------- */
{
  "hosting": {
    "public": "build",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [ { "source": "**", "destination": "/index.html" } ]
  }
}

/* ---------- .firebaserc ---------- */
{
  "projects": {
    "default": "YOUR_FIREBASE_PROJECT_ID"
  }
}

/* ---------- src/firebase.js ---------- */
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC_E91yz5ARm3vbq_55JfHjfYr0FJ3oB_o",
  authDomain: "ora-tech-79eae.firebaseapp.com",
  projectId: "ora-tech-79eae",
  storageBucket: "ora-tech-79eae.appspot.com",
  messagingSenderId: "62701837639",
  appId: "1:62701837639:web:42c9ec787844fa4de9c062"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

/* ---------- src/index.jsx ---------- */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

/* ---------- src/App.jsx ---------- */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

/* ---------- src/components/Navbar.jsx ---------- */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Sophia's Salon</Link>
      <div className="space-x-4">
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Link to="/" className="btn-primary">Book Now</Link>
    </nav>
  );
}

/* Other components and pages follow similar skeleton: simple functional components with placeholder sections */

/* ---------- README.md ---------- */
# Sophia's Salon

1. `npm install`
2. Add your Firebase project ID in `.firebaserc`
3. `npm start` to run locally
4. `npm run build` & `npm run deploy` to host on Firebase

Customize components in `src/components/` and pages in `src/pages/`.
