import React, { useState } from 'react';
import { useAuth } from '../components/AuthProvider';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password);
    navigate('/booking');
  };

  if (currentUser) navigate('/');

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-heading mb-4">Login</h2>
      <label className="block mb-2">Email</label>
      <input type="email" className="w-full mb-4 p-2 border rounded" onChange={e=>setEmail(e.target.value)} />
      <label className="block mb-2">Password</label>
      <input type="password" className="w-full mb-4 p-2 border rounded" onChange={e=>setPassword(e.target.value)} />
      <button type="submit" className="btn-primary w-full">Login</button>
    </form>
  );
}