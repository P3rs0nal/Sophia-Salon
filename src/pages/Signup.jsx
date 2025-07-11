import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/booking');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-brand2 rounded-lg shadow">
      <h2 className="text-2xl font-heading mb-6 text-center">Sign Up</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <label className="block mb-2">Email</label>
      <input
        type="email"
        required
        className="w-full mb-4 p-2 border rounded"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <label className="block mb-2">Password</label>
      <input
        type="password"
        required
        className="w-full mb-6 p-2 border rounded"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button type="submit" className="btn-primary w-full">Create Account</button>
    </form>
  );
}
