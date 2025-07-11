import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useAuth } from './AuthProvider';
import { useNavigate } from 'react-router-dom';

export default function BookingForm() {
  const { currentUser } = useAuth();
  const nav = useNavigate();
  const [slots, setSlots] = useState([]);
  const [form, setForm] = useState({ service: '', date: '', time: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!currentUser) return nav('/signup', { replace: true });
    // Stub: replace with real Firestore availability query
    setSlots([
      { date: '2025-07-15', time: '10:00 AM' },
      { date: '2025-07-15', time: '1:00 PM' },
    ]);
  }, [currentUser, nav]);

  const handleSubmit = async e => {
    e.preventDefault();
    await addDoc(collection(db, 'bookings'), {
      userId: currentUser.uid,
      ...form,
      createdAt: serverTimestamp()
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto p-6 text-center">
        <h2 className="text-2xl font-heading mb-4">Thank you!</h2>
        <p>Your appointment has been booked. We’ll see you then!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-surface rounded-lg shadow">
      <h2 className="text-2xl font-heading mb-6 text-center">Book an Appointment</h2>

      <label className="block mb-2">Service</label>
      <select 
        required
        className="w-full mb-4 p-2 border rounded"
        onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
      >
        <option value="">Select Service…</option>
        <option value="Gel Manicure">Gel Manicure</option>
        <option value="Acrylic Full Set">Acrylic Full Set</option>
        <option value="Custom Nail Art">Custom Nail Art</option>
      </select>

      <label className="block mb-2">Available Slot</label>
      <select
        required
        className="w-full mb-6 p-2 border rounded"
        onChange={e => {
          const [date, time] = e.target.value.split('|');
          setForm(f => ({ ...f, date, time }));
        }}
      >
        <option value="">Choose a slot…</option>
        {slots.map((s,i) => (
          <option key={i} value={`${s.date}|${s.time}`}>
            {s.date} — {s.time}
          </option>
        ))}
      </select>

      <button type="submit" className="btn-primary w-full">Confirm Booking</button>
    </form>
  );
}