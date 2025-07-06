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